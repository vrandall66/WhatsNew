import React from "react";
import { shallow } from "enzyme";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });
  it("Should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
