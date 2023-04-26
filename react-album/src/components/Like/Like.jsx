import "./Like.css";
import { useState } from "react";

function Like() {
    const [likes, setLikes] = useState(0);
    const handleLiked = (evt) => {
        setLikes(likes + 1)
        alert('Esta cancion sera agregada a favoritos');
        console.log(likes);
    }
    
  return (
    <button
      type="button"
      className="card__info__like"
      onClick={handleLiked}
    >
      <span className="card__info__like__icon">
        <ion-icon name="heart-outline"></ion-icon>
      </span>
    </button>
  );
}

export default Like;
