import { logoImage, logoImage2 } from "../assets/images";
import { HiOutlineHome } from "react-icons/hi2";
import { IoCreateOutline, IoImagesOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../css/About.css";
import {
  Cloudinary,
  ExpressJs,
  Linkedin,
  MongoDB,
  NodeJs,
  OpenAI,
  ReactJs,
  Vite,
  Gmail,
} from "../assets/logos";

const Contact = ({ theme }) => {
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
          <img
            src={theme === "light" ? logoImage : logoImage2}
            alt="openai"
            className="logo"
          />
        </div>
      </div>

      <div className="commmon-content about-body">
        <div className="about-content">
          <div className="common-title about-title">About</div>
          <div className="common-description">
            This AI Image Generator web app allows users to create high-quality
            images by providing a descriptive prompt. Built with modern
            technologies, it ensures a seamless user experience and efficient
            image generation.
          </div>

          <div className="logo-body">
            <img src={Vite} alt="vite" className="about-tec-logo" />
            <img src={ReactJs} alt="react" className="about-tec-logo" />
            <img src={NodeJs} alt="node" className="about-tec-logo nodejs" />
            <img src={MongoDB} alt="mongo" className="about-tec-logo" />
            <img src={ExpressJs} alt="express" className="about-tec-logo" />
            <img src={Cloudinary} alt="cloudinary" className="about-tec-logo" />
            <img src={OpenAI} alt="openai" className="about-tec-logo openai" />
          </div>

          <ul className="tech-description">
            <li>
              <strong>Vite -</strong> Lightning-fast development environment
            </li>
            <li>
              <strong>React.js -</strong> Interactive user interface
            </li>
            <li>
              <strong>Node.js -</strong> Backend operations
            </li>
            <li>
              <strong>MongoDB -</strong> Database for metadata
            </li>
            <li>
              <strong>Express.js -</strong> Server and API integration
            </li>
            <li>
              <strong>Cloudinary -</strong> Image storage and management
            </li>
            <li>
              <strong>OpenAI Image API -</strong> AI-powered image generation
            </li>
          </ul>

          <div className="contact-body">
            Contact:
            <a
              href="https://www.linkedin.com/in/sanjay-swapan-dutta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="linkedin" className="contact-img" />
            </a>
            <a
              href="mailto:sanjaydutta978@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Gmail} alt="gmail" className="contact-img" />
            </a>
          </div>
        </div>
      </div>

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
