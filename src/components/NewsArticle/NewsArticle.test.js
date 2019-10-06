import React from "react";
import { shallow } from "enzyme";
import { FaArrowRight } from "react-icons/fa";

describe("NewsArticle", () => {
  it("should match the snapshot", () => {
    let img, headline, description, url;
    const wrapper = shallow(
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
    expect(wrapper).toMatchSnapshot();
  });
});
