import "./ArticleCard.scss";
import { truncate } from "../../helpers/truncate";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { removeTags } from "../../helpers/hooks/remove-tags";

const ArticleCard = ({ id, image, title, description, author, createdAt, category}) => {
  const [errorPlaceholder, setErrorPlaceholder] = useState(false)
  return (
    <div  className='article-card'>
      <div className='article__card-image'>
        <Link to={`/article/${id}`}>
          <img onError={(e, s) => {
            if(!s){
              setErrorPlaceholder(true)
            }
          }} src={!image || errorPlaceholder ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneJHp1-rNCNwaaiGE_U76o3pn8u9EN6NuqRQrSsUlkkA4WKFzuoLgMf1OrjibOsFfDsU&usqp=CAU" : image } alt="" />
        </Link>
      </div>
      <h3>{truncate(title, 35, "...")}</h3>
      <p>{truncate(removeTags(description), 50, "...")}</p>
      <div>
        <p>{author}</p>
        <p>{createdAt}</p>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default ArticleCard