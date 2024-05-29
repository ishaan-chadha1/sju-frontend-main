import { Link } from "react-router-dom";
import "./Header.css";
import { Image } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Header = () => {
  const handleMenuClick = () => {
    const body = document.querySelector("body");
    body.classList.toggle("sidebar-show");
  };
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(true);
    document.body.classList.toggle('show-menu');
  };
  return (
    <header>
      <Link className="sidebarmenu" onClick={handleClick}><Icon icon="material-symbols-light:menu" width="30px" height="30px" /></Link>
      <div className="header-left-area">

        <h4>Good morning, Mo!</h4>
        <div className="searchbar">
          <div className="searchbox">
            <Image src="Images/search.svg"></Image>
            <input type="search" placeholder="Search Here..." />
          </div>
          <div className="profile">
            <div className="notification checkbutton">
              <Image src="Images/notification.svg"></Image>
              <span>2</span>
              <div className="headerdrop">
                <input type="checkbox" className='checked' />
                <Link className="button2">
                  <div className="fileview bg-lightblue">
                    <h3><Image src='Images/notification.svg'></Image> Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/notification.svg'></Image> Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/notification.svg'></Image> Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/notification.svg'></Image> Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/notification.svg'></Image> Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/notification.svg'></Image> Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/notification.svg'></Image> Lorem ipsum dolor sit amet.</h3>

                  </div>


                </Link>
              </div>
            </div>
            <div className="profiledetail checkbutton profiledrop">

              <div className="personname">
                <h5>Mo</h5>
                <p>JOINED 2023</p>
              </div>
              <Image src="Images/profileimage.png" />
              <div className="headerdrop">
                <input type="checkbox" className='checked' />
                <Link className="button2">
                  <div className="fileview bg-lightblue">
                    <h3><Image src='Images/homepage/bluetransfer.svg'></Image>  Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/homepage/bluetransfer.svg'></Image>  Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/homepage/bluetransfer.svg'></Image>  Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/homepage/bluetransfer.svg'></Image>  Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/homepage/bluetransfer.svg'></Image>  Lorem ipsum dolor sit amet.</h3>
                    <h3><Image src='Images/homepage/bluetransfer.svg'></Image>  Lorem ipsum dolor sit amet.</h3>


                  </div>


                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
