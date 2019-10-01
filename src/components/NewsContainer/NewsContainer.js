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
        image={article.image} />
    );
  });
  return (
    <div>
      {newsArticles}
    </div>
  )
};

export default NewsContainer;
