import Posts from "../Context/Posts.json";
import Post from "./Post";
import { useState } from "react";

const Container = () => {
  const [statu, setStatu] = useState(false);

  const inputHandler = (e) => {
    if (e.target.value !== "") {
      setStatu(true);
    }
  };
  return (
    <>
      <div className="home">
        <div className="home-header">
          <span>Home</span>
          <i className="fa-regular fa-star"></i>
        </div>
        <div className="home-body">
          <img src="https://media.licdn.com/dms/image/C4E03AQEWK6Ek6uQ0sw/profile-displayphoto-shrink_800_800/0/1662559392507?e=1676505600&v=beta&t=LSG6nONWTTpZUiJuDy58IjOMBd84Q65-jeWhV-913zg"></img>
          <input
            onChange={(e) => inputHandler(e)}
            placeholder="What's Happening?"
            type="text"
          ></input>
        </div>
        <div className="home-bottom">
          <div className="icons">
            <i className="fa-solid fa-image"></i>
            <i className="fa-regular fa-file-video"></i>
            <i className="fa-solid fa-list"></i>
            <i className="fa-regular fa-face-smile"></i>
            <i className="fa-solid fa-calendar-days"></i>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="tweet">
            <button disabled={!statu}>Tweet</button>
          </div>
        </div>
      </div>
      <div className="posts">
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default Container;
