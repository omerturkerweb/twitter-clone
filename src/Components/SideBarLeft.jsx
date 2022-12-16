const SideBarLeft = () => {
  return (
    <>
      <div className="side-bar-left">
        <ul className="menu">
          <li className="main-twitter-logo-li">
            <div className="menu-item">
              <i className="fa-brands fa-twitter main-twitter-logo"></i>
              <span></span>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <i className="fa-solid fa-hashtag"></i>
              <span>Explore</span>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <i className="fa-regular fa-bell"></i>
              <span>Notifictions</span>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <i className="fa-regular fa-envelope"></i>
              <span>Messages</span>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <i className="fa-regular fa-bookmark"></i>
              <span>Bookmarks</span>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <i className="fa-sharp fa-solid fa-list"></i>
              <span>Lists</span>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <i className="fa-regular fa-user"></i>
              <span>Profile</span>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <i className="fa-sharp fa-solid fa-angles-right"></i>
              <span>More</span>
            </div>
          </li>

          <button className="tweet-button">Tweet</button>
        </ul>
        <div className="profile-owner">
          <div className="profile-img">
            <img src="https://media.licdn.com/dms/image/C4E03AQEWK6Ek6uQ0sw/profile-displayphoto-shrink_800_800/0/1662559392507?e=1676505600&v=beta&t=LSG6nONWTTpZUiJuDy58IjOMBd84Q65-jeWhV-913zg"></img>
          </div>
          <div className="profile-details">
            <p className="profile-name-surname">Ömer Türker</p>
            <p className="profile-id">@omerturkerweb</p>
          </div>
          <div className="more-button">
            <i className="fa-solid fa-ellipsis profile-more-button"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarLeft;
