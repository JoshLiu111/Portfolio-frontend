import shareIcon from "/images/icon-share.svg";
import { useState } from "react";
import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";
import pinterestIcon from "/images/icon-pinterest.svg";
const ArticleCard = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  return (
    <div className="article-container">
      <img
        src="./images/drawers.jpg"
        alt="drawers image"
        className="article-image"
      />
      <section className="text-container">
        <h2 className="title text-preset-1">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p className="description text-preset-2-medium">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <section className="button-container">
          <div className="author-info-section">
            <img
              src="./images/avatar-michelle.jpg"
              alt="author avatar"
              className="author-avatar"
            />
            <div className="author-info">
              <p className="author-name text-preset-2-bold">
                Michelle Appleton
              </p>
              <p className="publishing-date text-preset-2-medium">
                28 Jun 2020
              </p>
            </div>
          </div>
          <button
            className={`share-button ${isShareOpen ? "active" : ""}`}
            onClick={() => setIsShareOpen(!isShareOpen)}
          >
            <img src={shareIcon} type="image/svg+xml" alt="share icon" />
          </button>
          {isShareOpen && (
            <div className="share-toast">
              <span className="share-text text-preset-3">SHARE</span>
              <div className="share-icons">
                <img href="#" src={facebookIcon} alt="facebook"></img>
                <img href="#" src={twitterIcon} alt="twitter"></img>
                <img href="#" src={pinterestIcon} alt="pinterest"></img>
              </div>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default ArticleCard;
