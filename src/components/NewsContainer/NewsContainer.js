import React from "react";
import NewsArticle from "../NewsArticle/NewsArticle";
import "./NewsContainer.css";

const NewsContainer = ({ newsType }) => {
  const newsArticles = newsType.map(article => {
    return (
        <NewsArticle
        key={article.id}
        headline={article.headline}
        description={article.description}
        url={article.url}
        img={article.img}
       />
    );
  });
  return (
    <div className='NewsContainer'>
      {newsArticles}
    </div>
  )
};

export default NewsContainer;
