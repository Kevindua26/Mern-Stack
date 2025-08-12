import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setLiked] = useState(true);
  let [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let styles = {
    color: isLiked ? "white" : "red",
  }

  return (
    <div onClick={toggleLike}>
      <h2>
        {isLiked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart" style={styles}></i>
        )}
        &nbsp;{clicks} Likes
      </h2>
    </div>
  );
}
