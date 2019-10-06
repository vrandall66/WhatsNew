import React from "react";
import { shallow } from "enzyme";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  let wrapper;
  const mockSearchFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchForm searchArticles={mockSearchFunc} />);
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

  it("should call searchArticles and clearState upon event", () => {
    const mockState = { search: "nasa" };
    wrapper.instance().setState(mockState);
    const mockPreventEvent = { preventDefault: jest.fn() };
    wrapper.instance().clearState = jest.fn();

    wrapper.instance().handleSearch(mockPreventEvent);

    expect(wrapper.instance().clearState).toHaveBeenCalled();
    expect(mockSearchFunc).toHaveBeenCalledWith("nasa");
  });

  it("should run handle search upon enter kemydown in input field", () => {
    const mockEvent = {
      target: {
        name: "search",
        value: "nasa"
      }
    };
  });
});
