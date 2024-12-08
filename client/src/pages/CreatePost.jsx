import { useState } from "react";
import "../css/CreatePost.css";
import { logoImage } from "../assets/images";
import { HiOutlineHome } from "react-icons/hi2";
import { IoCreateOutline, IoImagesOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { previewImg } from "../assets/images";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { getRandomPrompt } from "../utils";
import Loading from "../components/Loading";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratoingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        await response.json();
        navigate("/");
      } catch (err) {
        alert(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and generate an image");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratoingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        console.log(error);
        alert(error);
      } finally {
        setGeneratoingImg(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

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

      <div className="common-content">
        <div className="common-title">Create Post</div>
        <div className="common-description">
          Generate stunning AI-powered images with just a few clicks. Explore
          creativity with unique, AI-generated visuals tailored to your
          imagination.
        </div>
        <div className="middle-content">
          <div className="middle-content-left">
            <form className="middle-content-form" onSubmit={handleSubmit}>
              <div className="common-form-field">
                <label className="common-label">Your Name</label>
                <input
                  className="common-input"
                  type="text"
                  placeholder="Ex. John Doe"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="common-form-field">
                <span className="horizontal-form">
                  <label className="common-label">Prompt</label>
                  <span
                    className="surprise-button"
                    type="button"
                    onClick={handleSurpriseMe}
                  >
                    Surprise Me
                  </span>
                </span>
                <input
                  className="common-input"
                  type="text"
                  name="prompt"
                  placeholder="Ex. A plush toy robot sitting against a yellow wall"
                  value={form.prompt}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="common-button-body">
                <button
                  type="button"
                  onClick={generateImage}
                  className="common-primary-button"
                >
                  {generatingImg ? "Generating..." : "Generate"}
                </button>
              </div>
            </form>
            <div className="middle-footer">
              <div className="middle-footer-text">
                Once you have brought your vision to life with the perfect
                image, share it with the community and inspire others.
              </div>
              <div className="footer-button-body">
                <div className="share-button-main">Share with community</div>
                <div className="download-button-main">
                  <MdOutlineDownloadForOffline className="download-icon" />
                  Download
                </div>
              </div>
            </div>
          </div>

          <div className="middle-content-right">
            <div className="image-container-box">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="preview-image"
                />
              ) : (
                <img src={previewImg} alt="preview" className="preview-image" />
              )}

              {generatingImg && (
                <div className="loader-body">
                  <Loading />
                </div>
              )}
            </div>
            <div className="right-button-body">
              <div className="share-button">Share with community</div>
              <div className="download-button">
                <MdOutlineDownloadForOffline className="download-icon" />
              </div>
            </div>
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

          <div className="menu-item-box-common active-common">
            <IoCreateOutline className="menu-icon-common " />
            <div className="menu-item-common">Create</div>
          </div>

          <div
            className="menu-item-box-common"
            onClick={() => {
              handleNavigate("/gallery");
            }}
          >
            <IoImagesOutline className="menu-icon-common " />{" "}
            <div className="menu-item-common">Gallery</div>
          </div>

          <div
            className="menu-item-box-common"
            onClick={() => {
              handleNavigate("/contact");
            }}
          >
            <RiMessage3Line className="menu-icon-common " />{" "}
            <div className="menu-item-common">Contact</div>
          </div>
        </div>
      </div>

      <div className="footer-common">
        © 2024 DreamPixel. All Rights Reserved.
      </div>
    </div>
  );
};

export default CreatePost;
