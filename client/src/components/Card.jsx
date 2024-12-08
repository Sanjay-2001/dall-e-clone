import download from "../assets/images/download.png";
import { downloadImage } from "../utils";
import "../css/Card.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={photo} alt={prompt} />
      <div className="card-hover-content">
        <p className="card-prompt">{prompt}</p>
        <div className="card-footer">
          <div className="card-user">
            <div className="user-avatar">{name[0]}</div>
            <p className="user-name">{name}</p>
          </div>
          {/* <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="card-download-button"
          >
            <img src={download} alt="download" className="card-download-icon" />
          </button> */}

          <div
            className="download-button card-download-button"
            onClick={() => downloadImage(_id, photo)}
          >
            <MdOutlineDownloadForOffline className="download-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
