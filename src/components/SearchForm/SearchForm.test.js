import React from "react";
import { shallow } from "enzyme";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  let wrapper;

  beforeEach(() => {
    const mockSearch = jest.fn();
    wrapper = shallow(<SearchForm searchArticles={mockSearch} />);
  });

  it("Should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state on keydown in search input", () => {
    const mockEvent = {
      target: {
        name: "search",
        value: "nasa"
      }
    };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual({ search: "nasa" });
  });

  it("should run handleChange on keydown in search field", () => {
    const mockEvent = {
      target: {
        name: "search",
        value: "nasa"
      }
    };
    wrapper.instance().handleChange = jest.fn();

    wrapper.find("input").simulate("change", mockEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it("should be able to clear it's own state", () => {
    const mockState = { search: "nasa" };

    wrapper.instance().setState(mockState);

    expect(wrapper.state()).toEqual({ search: "nasa" });

    wrapper.instance().clearState();

    expect(wrapper.state()).toEqual({ search: "" });
  });
});
