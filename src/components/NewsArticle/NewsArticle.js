import React from "react";
import "./NewsArticle.css";

const NewsArticle = ({ headline, description, url, image }) => {
  return (<div>
  <h1>{headline}</h1>
  <p>{description}</p>
  <a href={url}>Link to article</a>
  <img src={image} />
  </div>);
};

export default NewsArticle;
