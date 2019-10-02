import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./NewsArticle.css";

const NewsArticle = ({ headline, description, url, img }) => {
  return (
    <div className="NewsArticle">
      <img src={img} alt="" className="NewsArticle-img" />
      <h2>{headline}</h2>
      <p>{description}</p>
      <a href={url} className="NewsArticle-link">
        Link to article
        <span>
          <FaArrowRight />
        </span>
      </a>
    </div>
  );
};

export default NewsArticle;
