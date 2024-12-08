import { useEffect, useRef, useState } from "react";
import "../css/Home.css";
import { GiBoomerangSun } from "react-icons/gi";
import {
  logoImage,
  modelImage,
  profile1,
  profile2,
  profile3,
} from "../assets/images";
import { TbSend2 } from "react-icons/tb";

import { HiOutlineHome } from "react-icons/hi2";
import { IoCreateOutline, IoImagesOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Home = ({ toggleTheme }) => {
  const navigate = useNavigate();
  const rightBodyRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const resizeImage = () => {
      if (rightBodyRef.current) {
        setImageHeight(rightBodyRef.current.offsetHeight);
      }
    };
    resizeImage();
    window.addEventListener("resize", resizeImage);
    return () => window.removeEventListener("resize", resizeImage);
  }, [rightBodyRef, imageHeight]);

  const handleNavigate = (nav_link) => {
    navigate(nav_link);
  };

  return (
    <div className="home-body">
      <div className="home-header">
        <div className="image-container">
          <img src={logoImage} alt="openai" className="logo" />
        </div>
      </div>

      <div className="home-content">
        <div className="home-left-body">
          <div className="home-banner">
            <div className="home-text">Generating</div>
            <div className="home-text text-bottom">
              your <span className="text-bottom-highlight">dreams</span>
              <span className="hidden-element diamond-hide"></span>
              <div className="button-content">
                <button
                  className="start-button"
                  onClick={() => {
                    handleNavigate("/create-post");
                  }}
                >
                  Start
                </button>
                <TbSend2
                  className="start-icon"
                  onClick={() => {
                    handleNavigate("/create-post");
                  }}
                />
              </div>
              <div className="hastag-content">
                <div className="hastag"> #AIArt</div>
                <div className="hastag"> #ImageGen </div>
                <div className="hastag"> #CreativeAI</div>
                <div className="hastag"> #ArtByAI</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-right-body" ref={rightBodyRef}>
          <span className="hidden-element circle-hide"></span>

          <div className="mode-body">
            <GiBoomerangSun
              className="mode-icon"
              onClick={() => {
                toggleTheme();
              }}
            />
          </div>

          <img
            src={modelImage}
            alt="bg"
            className="banner-img"
            style={{ height: `${imageHeight}px` }}
          />
        </div>
      </div>

      <div className="banner-box">
        <div className="banner-box-child">
          <div className="menu-box">
            <div className="menu-item-box">
              <HiOutlineHome className="menu-icon active-icon" />
              <span className="menu-item menu-active">Home</span>
            </div>

            <div className="menu-item-box">
              <IoCreateOutline
                className="menu-icon "
                onClick={() => {
                  handleNavigate("/create-post");
                }}
              />
              <span
                className="menu-item "
                onClick={() => {
                  handleNavigate("/create-post");
                }}
              >
                Create
              </span>
            </div>

            <div className="menu-item-box">
              <IoImagesOutline
                className="menu-icon "
                onClick={() => {
                  handleNavigate("/gallery");
                }}
              />
              <span
                className="menu-item "
                onClick={() => {
                  handleNavigate("/gallery");
                }}
              >
                Gallery
              </span>
            </div>

            <div className="menu-item-box">
              <RiMessage3Line
                className="menu-icon "
                onClick={() => {
                  handleNavigate("/contact");
                }}
              />
              <span
                className="menu-item "
                onClick={() => {
                  handleNavigate("/contact");
                }}
              >
                Contact
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-box">
        <div className="user-title">Featured Artists</div>
        <div className="user-box-body">
          <div className="user-box">
            <div className="image-body">
              <img src={profile1} alt="pf1" className="profile" />
            </div>
            Artify
          </div>
          <div className="user-box">
            <div className="image-body">
              <img src={profile2} alt="pf1" className="profile" />
            </div>
            Pixly
          </div>
          <div className="user-box">
            <div className="image-body">
              <img src={profile3} alt="pf1" className="profile" />
            </div>
            Genix
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <div className="footer-mobile-text">
          © 2024 DreamPixel. All Rights Reserved.
        </div>
      </div>

      <div className="home-footer">
        <div className="footer-content">
          <div className="user-body">
            <div className="user-title">
              Featured
              <br /> Artists
            </div>
            <div className="user-box">
              <div className="image-body">
                <img src={profile1} alt="pf1" className="profile" />
              </div>
              Artify
            </div>
            <div className="user-box">
              <div className="image-body">
                <img src={profile2} alt="pf1" className="profile" />
              </div>
              Pixly
            </div>
            <div className="user-box">
              <div className="image-body">
                <img src={profile3} alt="pf1" className="profile" />
              </div>
              Genix
            </div>
          </div>
          <div className="footer-body">
            <div className="hidden-element footer-circle"></div>
            <span>© 2024 DreamPixel. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
