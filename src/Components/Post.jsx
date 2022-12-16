import React, { Component, useState, useEffect } from "react";
class Post extends Component {
  render() {
    const post = this.props.post;

    return (
      <div className="post">
        <div className="post-top">
          <div className="post-owner">
            <img className="post-owner-img" src={post.ownerImg}></img>
          </div>
          <div className="post-details">
            <div className="post-details-top">
              <span className="name">{post.owner}</span>
              <p>{post.ownerId}</p>
              <span className="date"> {post.date}</span>
            </div>
            <div className="post-details-bottom">
              <p>{post.text}</p>
            </div>
          </div>
          <div className="more">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div style={{ display: "none" }} className="post-body"></div>
        {/* if post has an any media here ... */}

        <div className="post-bottom">
          <div className="cmt">
            <i className="fa-regular fa-comment icon-cmt"></i>
            <span> {post.commentCount}</span>
          </div>
          <div className="rt">
            <i className="fa-solid fa-retweet icon-rt"></i>
            <span> {post.retweetCount}</span>
          </div>
          <div className="fav">
            <i className="fa-regular fa-heart icon-fav"></i>
            <span> {post.likeCount}</span>
          </div>
          <div className="share">
            <i className="fa-regular fa-share-from-square"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Post;
