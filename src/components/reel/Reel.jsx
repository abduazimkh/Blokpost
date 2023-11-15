import React, { useEffect, useRef, useState } from "react";
import "./Reel.scss";
import instance from "../../services/api";
import { CardSkeleton, Container } from "../../utils";
import ArticleCard from "../article-card/ArticleCard";

const Reel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance("/api/posts")
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <div className="home__reel">
      <Container>
        <h2>Today's trending articles</h2>
        <div className="reel__wrapper">
          {!loading ? (
            data.map((article) => (
              <ArticleCard
                id={article._id}
                image={article.image}
                title={article.title}
                description={article.description}
                author={article.author}
                createdAt={article.createdAt}
                category={article.category}
              />
            ))
          ) : (
            <CardSkeleton amount={10} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Reel;
