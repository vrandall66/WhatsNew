import React from "react";
import { shallow } from "enzyme";
import NewsContainer from "./NewsContainer";
import localData from "../../data/local";

describe("NewsContainer", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<NewsContainer newsType={localData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
