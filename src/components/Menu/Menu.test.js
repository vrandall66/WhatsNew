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
});
