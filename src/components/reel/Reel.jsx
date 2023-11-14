import React, { useEffect, useRef, useState } from 'react';
import "./Reel.scss";
import instance from "../../services/api";
import { Container } from '../../utils';
import ArticleCard from '../article-card/ArticleCard';


const Reel = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        instance("/api/posts")
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => console.log(error))
    }, [])

    console.log(data);

  return (
    <div className='home__reel'>
        <Container>
            <h2>Today's trending articles</h2>
            <div className="reel__wrapper">
                {
                    data.map(article =>
                        <ArticleCard 
                            id={article._id}
                            image={article.image}
                            title={article.title}
                            description={article.description}
                            author={article.author}
                            createdAt={article.createdAt}
                            category={article.category}
                        />
                    )
                }
            </div>
        </Container>
    </div>
  )
}

export default Reel