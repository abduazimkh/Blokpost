import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import instance from '../../services/api';
import { Container } from '../../utils';
import "./Article.scss";

const Article = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    instance(`/api/posts/${id}`)
    .then(res => setData(res.data))
  }, [])

  console.log(data.title);

  return (
    <Container>
      {
        <div className='single-article'>
          <h2>{data.title}</h2>
          <img src={data.image} alt="picture" />
          <p>{data.title}</p>

          <p>{data.description}</p>
        </div>
      }
    </Container>
  )
}

export default Article