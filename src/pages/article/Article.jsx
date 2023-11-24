import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import instance from "../../services/api";
import { Button, Container, SingleCardSkeleton } from "../../utils";
import "./Article.scss";
import { useValue } from "../../context/AppProvider";
import { all } from "axios";
import parse from 'html-react-parser'

const Article = () => {
  const [state] = useValue();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const [allcomments, setAllcomments] = useState([]);
  const [commentValue, setCommentValue] = useState("")
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const area = useRef();
  useEffect(() => {
    instance(`/api/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    instance(`/api/users/${state.auth.user_id}`)
      .then((res) => {
        setUserdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePostComment = (e) => {
    e.preventDefault();

    instance.post(`/api/comments`, {
      description: commentValue,
      post: id
    }).then(res => setNewComment(res.data))
    .catch(err => console.log(err))
    
  }

  useEffect(() => {
    instance(`/api/comments`)
      .then((res) => {
        setAllcomments(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newComment])

  const handleEditBtn = (id) => {
    instance.put(`/api/comments/${id}`, {
      description: commentValue,
    }).then(res => {
      setNewComment(res.data)
    })
    .catch(err => console.log(err))
  } 

  const handleDeleteBtn = (id) => {
    instance.delete(`/api/comments/${id}`, {
      description: commentValue,
      post: id,
    }).then(res => setNewComment(res.data))
    .catch(err => console.log(err))
  }

  console.log(allcomments);

  return (
    <Container>
      {!loading ? (
        <div className="single-article">
          <h2>{data.title}</h2>
          <img src={data.image} alt="picture" />
          <p>{parse(data.title)}</p>

          <p>{parse(data.description)}</p>
        </div>
      ) : (
        <SingleCardSkeleton amount={1} />
      )}

      <form className="article__comment-form" onSubmit={handlePostComment}>
        <div className="article__comment-user">
          {userdata && <h2>{userdata.firstname?.slice(0, 1)}</h2>}
        </div>

        <div className="article__comment-wrapper">
          <textarea ref={area} value={commentValue} onChange={e => setCommentValue(e.target.value)} cols="30" rows="10" className="article__comment"></textarea>
          <Button text="Comment" />
        </div>
      </form>
      {
        allcomments.length > 0 &&
        <div className="article__comments">
          {
            allcomments.filter((comment) => comment.post === id).reverse().map((comment) => (
              <div key={comment._id} className="article__comment-item">
                <div className="article__comment-user comment-user">
                  {userdata && <h2>{userdata.firstname?.slice(0, 1)}</h2>}
                </div>
                <p>{comment.description}</p>

                <div className="btns">
                  <button onClick={() => handleEditBtn(comment._id)}>Edit</button>
                  <button onClick={() => handleDeleteBtn(comment._id)}>Delete</button>
                </div>
              </div>
            ))
          }

        </div>
      }
    </Container>
  );
};

export default Article;