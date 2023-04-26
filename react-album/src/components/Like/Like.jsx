import "./Like.css";
import { useState } from "react";

function Like() {
  let [like, setLike] = useState(false);

  const handleLiked = (evt) => {
    if (like === false) {
      setLike((like = true));
    } else {
      setLike((like = false));
    }
    console.log(like);
  };

  return (
    <button type="button" className="card__info__like" onClick={handleLiked}>
      <span className="card__info__like__icon">
        {like ? (<ion-icon name="heart"></ion-icon>):(<ion-icon name="heart-outline"></ion-icon>)}
      </span>
    </button>
  );
}

export default Like;
