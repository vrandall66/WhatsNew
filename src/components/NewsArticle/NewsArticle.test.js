import React from "react";
import { shallow } from "enzyme";
import NewsArticle from './NewsArticle'

describe("NewsArticle", () => {
  it("should match the snapshot", () => {
    let article = {
      description: '',
      headline: '',
      id: 1,
      img: '',
      url: ''
    }
    const wrapper = shallow(
      <NewsArticle
        key={article.id}
        headline={article.headline}
        description={article.description}
        url={article.url}
        img={article.img}
      />)
    expect(wrapper).toMatchSnapshot();
  });
});
