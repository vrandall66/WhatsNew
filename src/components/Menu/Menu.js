import React from "react";
import { TiLocationOutline } from "react-icons/ti";
import { FaCogs } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { GiMicroscope } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import "./Menu.css";

const Menu = ({ data, changeData }) => {
  return (
    <aside className="Menu">
      <h1 className="Menu-header">
        What's <span className="Menu-header-span">New?</span>
      </h1>
      <ul className="Menu-ul">
        <li className="Menu-li" onClick={() => changeData(data.local)}>
          <span className="Menu-li-span">
            <TiLocationOutline />
          </span>
          Local News
        </li>
        <li className="Menu-li" onClick={() => changeData(data.technology)}>
          <span className="Menu-li-span">
            <FaCogs />
          </span>
          Technology
        </li>
        <li className="Menu-li" onClick={() => changeData(data.entertainment)}>
          <span className="Menu-li-span">
            <GiTicket />
          </span>
          Entertainment
        </li>
        <li className="Menu-li" onClick={() => changeData(data.science)}>
          <span className="Menu-li-span">
            <GiMicroscope />
          </span>
          Science
        </li>
        <li className="Menu-li" onClick={() => changeData(data.health)}>
          <span className="Menu-li-span">
            <FaHeartbeat />
          </span>
          Health
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
