import { logoImage } from "../assets/images";
import { HiOutlineHome } from "react-icons/hi2";
import { IoCreateOutline, IoImagesOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleNavigate = (nav_link) => {
    navigate(nav_link);
  };

  return (
    <div className="home-body">
      <div className="home-header">
        <div
          className="image-container"
          onClick={() => {
            handleNavigate("/");
          }}
        >
          <img src={logoImage} alt="openai" className="logo" />
        </div>
      </div>

      <div className="commmon-content"></div>

      <div className="banner-box-common">
        <div className="menu-box-common">
          <div
            className="menu-item-box-common"
            onClick={() => {
              handleNavigate("/");
            }}
          >
            <HiOutlineHome className="menu-icon-common" />
            <div className="menu-item-common">Home</div>
          </div>

          <div
            className="menu-item-box-common "
            onClick={() => {
              handleNavigate("/create-post");
            }}
          >
            <IoCreateOutline className="menu-icon-common " />
            <div className="menu-item-common">Create</div>
          </div>

          <div
            className="menu-item-box-common "
            onClick={() => {
              handleNavigate("/gallery");
            }}
          >
            <IoImagesOutline className="menu-icon-common " />{" "}
            <div className="menu-item-common">Gallery</div>
          </div>

          <div className="menu-item-box-common active-common">
            <BsInfoSquare className="menu-icon-common " />{" "}
            <div className="menu-item-common">About</div>
          </div>
        </div>
      </div>

      <div className="footer-common">
        © 2024 DreamPixel. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
