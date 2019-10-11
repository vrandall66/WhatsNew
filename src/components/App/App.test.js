import React from "react";
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import App from "./App";
import science from "../../data/science";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match the wrapper", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state upon change data being invoked", () => {
    const mockEvent = { target: { id: "science" } };
    const expectedCategory = science;
    wrapper.instance().changeData(mockEvent);

    expect(wrapper.state("current")).toEqual(expectedCategory);
  });

  it("should search articles in current category and display search results", () => {
    const mockSearchedTerm = "nasa";
    wrapper.setState({
      current: science,
      displayed: science
    });
    wrapper.instance().searchArticles(mockSearchedTerm);

    expect(wrapper.state("displayed")).toEqual([
      {
        description:
          "The image was captured by NASA's Lunar Reconnaissance Orbiter (LRO) on Sept. 17 as it flew over the targeted landing site of India's Chandrayaan-2 mission.",
        headline: "India's Lost Moon Lander Is Somewhere in This Photo",
        id: 1,
        img:
          "https://cdn.mos.cms.futurecdn.net/FsUeVGmY89BWeb36U8cUj5-650-80.jpg",
        url:
          "https://www.livescience.com/india-moon-landing-site-nasa-photo.html"
      },
      {
        description:
          "NASA's black hole experts popped up on Reddit on Friday to field questions about these enigmatic objects. ",
        headline:
          "NASA, in Reddit AMA, says Earth probably won't be eaten by a black hole",
        id: 2,
        img:
          "https://cnet2.cbsistatic.com/img/tM8V3SxstaN-YQiY1QPVMhYBF1k=/2019/09/26/f41e8d77-b008-4887-ae0b-a6dba3e4db60/bh-visualization1.jpg",
        url:
          "https://www.cnet.com/news/nasa-in-reddit-ama-says-earth-probably-wont-be-eaten-by-a-black-hole/"
      },
      {
        description:
          "Lockheed Martin has won a contract from NASA to produce and operate six Orion spacecraft missions, a program the space agency calls the “backbone” of its plans for deep-space exploration and one that will send the first woman to the moon.",
        headline:
          "Lockheed Martin wins NASA contract for Orion program, which will send first woman to the moon",
        id: 5,
        img:
          "https://www.denverpost.com/wp-content/uploads/2018/04/lockheed-04-16-2018-ja-_ja28138a.jpg?w=863",
        url:
          "https://www.denverpost.com/2019/09/27/jefferson-county-lockheed-martin-orion-nasa/"
      }
    ]);
  });
});
