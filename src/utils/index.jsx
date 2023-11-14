import "./index.scss";
import Skeleton from "react-loading-skeleton";


const Button = ({text,icon, loading, click, type, disabled}) => {
  return (
    <button className='btn' disabled={disabled || loading} onClick={click} type={type}>
        {text} {icon}
    </button>
  )
}

const Container = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}


const CardSkeleton = ({ amount }) => {
  return new Array(amount).fill("").map((skeleton, index) => (
    <div className="article-card" key={index}>
      <div className="article__card-image">
        <Skeleton height={250}/>
      </div>
      <Skeleton count={3} style={{ marginTop: "10px" }} />
      <Skeleton count={3} style={{ marginTop: "10px" }} />
      <Skeleton height={40} style={{marginTop: "22px"}} />
    </div>
  ));
};


export { Button, Container, CardSkeleton }