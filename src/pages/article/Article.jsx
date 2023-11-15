import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import instance from '../../services/api';
import { Container, SingleCardSkeleton } from '../../utils';
import "./Article.scss";

const Article = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    instance(`/api/posts/${id}`)
    .then(res => {
      setData(res.data)
      setLoading(false)
    })
    // .chetch((err) => {
    //   console.log(err);
    //   setLoading(false)
    // })
  }, [])

  console.log(data.title);

  return (
    <Container>
      {!loading ?
        <div className='single-article'>
          <h2>{data.title}</h2>
          <img src={data.image} alt="picture" />
          <p>{data.title}</p>

          <p>{data.description}</p>
        </div> :
        <SingleCardSkeleton amount={10} />
      }
    </Container>
  )
}

export default Article