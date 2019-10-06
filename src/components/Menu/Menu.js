import React from "react";
import { TiLocationOutline } from "react-icons/ti";
import { FaCogs } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { GiMicroscope } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import "./Menu.css";

const Menu = ({ changeData }) => {
  return (
    <aside className="Menu">
      <h1 className="Menu-header">
        What's <span className="Menu-header-span">New?</span>
      </h1>
      <ul className="Menu-ul">
        <li className="Menu-li" id="local" onClick={(event) => changeData(event)}>
          <span className="Menu-li-span">
            <TiLocationOutline />
          </span>
          Local News
        </li>
        <li className="Menu-li" id="technology" onClick={(event) => changeData(event)}>
          <span className="Menu-li-span">
            <FaCogs />
          </span>
          Technology
        </li>
        <li className="Menu-li" id="entertainment" onClick={(event) => changeData(event)}>
          <span className="Menu-li-span">
            <GiTicket />
          </span>
          Entertainment
        </li>
        <li className="Menu-li" id="science" onClick={(event) => changeData(event)}>
          <span className="Menu-li-span">
            <GiMicroscope />
          </span>
          Science
        </li>
        <li className="Menu-li" id="health" onClick={(event) => changeData(event)}>
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
