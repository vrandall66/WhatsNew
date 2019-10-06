import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import local from "../../data/local";
import science from "../../data/science";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the wrapper", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state upon change data being invoked", () => {
    const mockEvent = { target: { id: 'science' } };
    const expectedCategory = science;
    wrapper.instance().changeData(mockEvent);

    expect(wrapper.state("current")).toEqual(expectedCategory);
  });
});
