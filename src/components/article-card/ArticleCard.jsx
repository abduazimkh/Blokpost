import "./ArticleCard.scss";
import { truncate } from "../../helpers/truncate";
import { Link } from 'react-router-dom';

const ArticleCard = ({ id, image, title, description, author, createdAt, category}) => {

  return (
    <div  className='article-card'>
      <div className='article__card-image'>
        <Link to={`/article/${id}`}>
          <img src={image ? image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneJHp1-rNCNwaaiGE_U76o3pn8u9EN6NuqRQrSsUlkkA4WKFzuoLgMf1OrjibOsFfDsU&usqp=CAU" } alt="" />
        </Link>
      </div>
      <h3>{truncate(title, 35, "...")}</h3>
      <p>{truncate(description, 50, "...")}</p>
      <div>
        <p>{author}</p>
        <p>{createdAt}</p>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default ArticleCard