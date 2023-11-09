import './Reel.scss'
import React, { useEffect, useState } from 'react'
import instance from '../../services/api'
import { Container } from '../../utils'
import ArticleCard from '../article-card/ArticleCard'

const Reel = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        instance('api/posts')
            .then(res => setData(res.data.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='home__reel'>
            <Container>
                <h2>Today`s trending articles</h2>
                <div className="reel__wrapper">
                    {
                        data.map(article =>
                        <ArticleCard 
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