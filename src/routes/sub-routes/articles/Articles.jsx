import "./Articles.scss"
import { useEffect, useRef, useState } from "react"
import instance from "../../../services/api"
import parse from 'html-react-parser'
import { Button, Loading } from "../../../utils"
import { useFetch } from "../../../helpers/hooks/useFetch"
import { useValue } from "../../../context/AppProvider"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Articles = () => {
  const [articlesPost, setArticlesPost] = useState([])
  const [loading, setLoading] = useState(true);
  const { data } = useFetch("/api/categories");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [state] = useValue();
  const modal = useRef();
  const [id, setId] = useState("")
  console.log(id);
  console.log(data);
  useEffect(() => {
    instance("/api/posts")
      .then(response => {
        setLoading(true)
        setArticlesPost(response.data.data)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
      })
    }, [articlesPost])
    const handleDelete = (id) => {
      setLoading(true)
    instance.delete(`/api/posts/${id}`)
  }
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link"],
      ],
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  };
  const handleEdit = (id) => {
    modal.current.style = "visibility: visible";
    localStorage.setItem("id", id)

  }

 

  const handleUpdatePost = (e) => {
    e.preventDefault();

  instance
  .put(`/api/posts/${localStorage.getItem("id")}`, {
    title,
    description,
    category,
    image,
  })
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
}


  return (
    <>
      <div className='all__articles-wrapper'>
        <h2 className="articles-subtitle">All Articles</h2>
        <div className="all__posts-container">
          {loading ? <Loading/> :
            articlesPost.filter(date => date.author === state.auth.user_id).map(article =>
              <div key={article._id} className="articles-card">
                <h2>{parse(article.title.slice(0, 28))}...</h2>
                <div className="articles-image">
                  <img src={article.image} alt="" />
                </div>
                <p>{parse(article.description.slice(0, 100))}</p>
                <div className="controls-btn">
                  <button onClick={() => handleEdit(article._id)} className="update-btn">Update</button>
                  <button onClick={() => handleDelete(article._id)} className="delete-btn">Delete</button>
                </div>
              </div>
            )
          }
        </div>
      </div>


      {
        modal &&  <div ref={modal} className="update__modal">
        <button>X</button>
        {/* onSubmit={handleUpdatePost} */}
        <form className="update-form" onSubmit={handleUpdatePost}>
          <input
            type="text"
            placeholder="Title"
            className="form__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="url"
            placeholder="Image Link"
            className="form__input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <ReactQuill
            modules={modules}
            theme="snow"
            value={description}
            onChange={setDescription}
          />
          <select
            defaultValue={"select"}
            className="form__input"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled value="select">
              Select post category
            </option>
            {data?.data?.map((categoryItem) => (
              <option key={categoryItem._id} value={categoryItem._id}>
                {categoryItem.title}
              </option>
            ))}
          </select>
          <Button text={"Update"} />
        </form>
      </div>
      
      }


    </>
  )
}

export default Articles