import { Image } from "react-bootstrap";
import "./Sidebar.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleItemClick = (link) => {
    setActiveLink(link);
  };
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(true);
    document.body.classList.remove('show-menu');
  };
  return (
    <div className="sidebar-main">
      <Link className="sidebarmenu closemenu" onClick={handleClick}><Icon icon="material-symbols-light:close" width="30px" height="30px" /></Link>
      <div className="sidebar-profile">
        <div className="sidebarlogo">
          <Image src="/Images/logo.svg" />

        </div>

      </div>

      <div className="sidebar-content">
        <ul className="sidebar-menu">
          <li onClick={handleClick} className={activeLink === "/" ? "active" : ""}>
            <Link to="/" onClick={() => handleItemClick("/")}>
              <Image src="Images/homepage/dashboard.svg" />
              Dashboard
            </Link>
          </li>
          <li onClick={handleClick} className={activeLink === "/mydata" ? "active" : ""}>
            <Link to="/mydata" onClick={() => handleItemClick("/mydata")}>
              <Image src="Images/homepage/mydata.svg" />
              My Data
            </Link>
          </li>
          <li onClick={handleClick} className={activeLink === "/bsync" ? "active" : ""}>
            <Link to="/bsync" onClick={() => handleItemClick("/bsync")}>
              <Image src="Images/homepage/sync.svg" />
              B-Sync
            </Link>
          </li>
          <li onClick={handleClick} className={activeLink === "/sharedfile" ? "active" : ""}>
            <Link to="/sharedfile" onClick={() => handleItemClick("/sharedfile")}>
              <Image src="Images/homepage/sharedfile.svg" />
              Shared File
            </Link>
          </li>
          <li onClick={handleClick} className={activeLink === "/trash" ? "active" : ""}>
            <Link to="/trash" onClick={() => handleItemClick("/trash")}>
              <Image src="Images/homepage/trash.svg" />
              Trash
            </Link>
          </li>
          <li onClick={handleClick} className={activeLink === "/setting" ? "active" : ""}>
            <Link to="/setting" onClick={() => handleItemClick("/setting")}>
              <Image src="Images/homepage/setting.svg" />
              Settings
            </Link>
          </li>

          <li onClick={handleClick} className={activeLink === "/Esign" ? "active" : ""}>
            <Link to="/Esign" onClick={() => handleItemClick("/Esign")}>
              <Image src="Images/homepage/esign.svg" />
              Esign
            </Link>
          </li>
          <li onClick={handleClick} className={activeLink === "/certificate" ? "active" : ""}>
            <Link to="/certificate" onClick={() => handleItemClick("/certificate")}>
              <Image src="Images/homepage/certification.svg" />
              Certification
            </Link>
          </li>

        </ul>
        <div className="bottom-content">
          <div className="sidebarprogressbar mt-auto">
            <div class="multigraph">
              <span class="tooltip">40 GB / 1 TB</span>
              <span class="graph"></span>
              <span className="available">Available</span>
            </div>
          </div>
          <div className="sidebarprogressbar mb-3">
            <div class="multigraph">
              <span class="tooltip">4 esign / 1 TB</span>
              <span class="graph"></span>
              <span className="available">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
