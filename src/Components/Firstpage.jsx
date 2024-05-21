import React, { useState } from 'react';

const First =()=>{
    
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    return(
    <>
  <div className="group-1">
    <div className="image">
      <div className="l-constrained-4">
        <img
          className="place-your-logo-here-double-click-to-edit"
          src="images/place_your_logo_here_doub.png"
          alt=""
          width={125}
          height={138}
        />
        <div className="text">
          <img
            className="title"
            src="images/title_11.png"
            alt="Enjoy the  beauty of  nature!"
            width={321}
            height={268}
            title="Enjoy the  beauty of  nature!"
          />
          <p className="body-text">
            Lorem ipsum dolor
            <br />
            sit amet, adipisicing
            <br />
            elit. Veniam, facilis.
          </p>
          <div className="button-holder">
            <a href="">GET STARTED</a>
          </div>
        </div>
      </div>
    </div>
    <div className="design">
      <img
        className="place-your-design-here-double-click-to-edit"
        src="images/place_your_design_here_do_13.png"
        alt=""
        width={199}
        height={98}
      />
      <img
        className="place-your-design-here-double-click-to-edit-2"
        src="images/place_your_design_here_do_12.png"
        alt=""
        width={615}
        height={519}
      />
    </div>
    <button className="menu-btn" onClick={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </button>
    <div className="toolbar group">
      <nav className="nav">
      <ul className={`nav-list group ${menuVisible ? 'show' : ''}`}>
          <li>
            <a href="#" className="home">
              Home
            </a>
          </li>
          <li>
            <a href="#a" className="about">
              About
            </a>
          </li>
          <li>
            <a href="#g" className="go">
              Go Hiking
            </a>
          </li>
          <li>
            <a href="#b" className="blog">
              Blog
            </a>
          </li>
          <li>
            <a href="#c" className="contact">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="button-holder-2"
        style={{ backgroundImage: "url(images/Button.png)" }}
      >
        <div>
          {/* <img class="search" src="images/search.png" alt="" width="18" height="18"> */}
        </div>
        <input className="searchbar" type="text" name="" id="" />
      </div>
    </div>
  </div>
   </>
    )
}
export default First