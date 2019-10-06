import React from "react";
import { shallow } from "enzyme";
import Menu from "./Menu";

describe("Menu", () => {
  let wrapper;
  const mockChangeData = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Menu changeData={mockChangeData} />);
  });

  it("Should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("should call change data upon a news category being selected", () => {
    it("should change data upon the local category being selected", () => {
      const mockEvent = {
        target: {
          id: "local"
        }
      };

      wrapper
        .find("li")
        .at(0)
        .simulate("click", mockEvent);

      expect(mockChangeData).toHaveBeenCalledWith(mockEvent);
    });
    it("should change data upon the technology category being selected", () => {
      const mockEvent = {
        target: {
          id: "technology"
        }
      };

      wrapper
        .find("li")
        .at(1)
        .simulate("click", mockEvent);

      expect(mockChangeData).toHaveBeenCalledWith(mockEvent);
    });
    it("should change data upon the entertainment category being selected", () => {
      const mockEvent = {
        target: {
          id: "entertainment"
        }
      };

      wrapper
        .find("li")
        .at(2)
        .simulate("click", mockEvent);

      expect(mockChangeData).toHaveBeenCalledWith(mockEvent);
    });
    it("should change data upon the science category being selected", () => {
      const mockEvent = {
        target: {
          id: "science"
        }
      };

      wrapper
        .find("li")
        .at(3)
        .simulate("click", mockEvent);

      expect(mockChangeData).toHaveBeenCalledWith(mockEvent);
    });
    it("should change data upon the health category being selected", () => {
      const mockEvent = {
        target: {
          id: "health"
        }
      };

      wrapper
        .find("li")
        .at(4)
        .simulate("click", mockEvent);

      expect(mockChangeData).toHaveBeenCalledWith(mockEvent);
    });
  });
});
