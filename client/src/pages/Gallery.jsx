import { useEffect, useState } from "react";
import { logoImage } from "../assets/images";
import { HiOutlineHome } from "react-icons/hi2";
import { IoCreateOutline, IoImagesOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../css/Gallery.css";
import Card from "../components/Card";
import Loading from "../components/Loading";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

const Gallery = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch("http://192.168.1.6:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "applo",
          },
        });

        if (response.ok) {
          const result = await response.json();

          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        // alert(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
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
        <div className="gallery-header">
          <div className="title-body">
            <div className="common-title">Gallery of Creativity</div>
            <div className="common-description">
              Explore a curated gallery of creative and breathtaking images.
            </div>
          </div>

          <div className="search-body">
            <input
              className="gallery-input"
              type="text"
              placeholder="Search posts"
              name="text"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="gallery-container">
          {loading ? (
            <div className="gallery-loader">
              <Loading />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className="gallery-search-text">
                  Showing results for
                  <span className="gallery-highlight"> {searchText}</span>
                </h2>
              )}
              <div className="gallery-grid">
                {searchText ? (
                  <RenderCards
                    data={searchedResults}
                    title="No search results found"
                  />
                ) : (
                  <RenderCards data={allPosts} title="No posts found" />
                )}
              </div>
            </>
          )}
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

          <div className="menu-item-box-common active-common">
            <IoImagesOutline className="menu-icon-common " />
            <div className="menu-item-common">Gallery</div>
          </div>

          <div
            className="menu-item-box-common"
            onClick={() => {
              handleNavigate("/about");
            }}
          >
            <BsInfoSquare className="menu-icon-common " />
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

export default Gallery;
