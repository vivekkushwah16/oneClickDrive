import React from "react";
import "./card.css";
import driver from "../assets/automotive-1866521_1280.jpg";
import SVG1 from "../assets/1.svg";
import SVG2 from "../assets/2.svg";
import SVG3 from "../assets/3.svg";
import SVG4 from "../assets/4.svg";
import SVG5 from "../assets/5.svg";
import SVG6 from "../assets/6.svg";
import SVG7 from "../assets/7.svg";
import SVG8 from "../assets/8.svg";
import SVG9 from "../assets/9.svg";
import SVG10 from "../assets/10.svg";

const Card = () => {
  return (
    <div className="cardBody">
      <div className="cardLeft">
        <img src={driver} alt="car driver" />
      </div>
      <div className="cardRight">
        <div>
          <h1 className="heading">Safe Drive</h1>
          <div className="icons">
            <div className="iconWrapper">
              <img src={SVG6} alt="person" />
            </div>
            <div className="iconWrapper">
              <img src={SVG7} alt="money" />
            </div>
            <div className="iconWrapper">
              <img src={SVG8} alt="card" />
            </div>
            <div className="iconWrapper">
              <img src={SVG9} alt="verify" />
            </div>
          </div>
          <div className="horizontalDivider" />
          <div className="aboutWays  display_none">
            <div>
              <p className="title">AED 80</p>
              <div className="list">
                <img className="rightTick" src={SVG1} alt="tick" />
                <p>One-way</p>
              </div>
            </div>
            <div>
              <p className="title">AED 150</p>
              <div className="list">
                <img className="rightTick" src={SVG1} alt="tick" />
                <p>Two-way</p>
              </div>
            </div>
          </div>
          <div className="aboutUs">
            <div className="logoWrapper">
              <img src={SVG10} alt="logo" />
            </div>
            <div className="listContainer">
              <div className="list">
                <div className="rightTick">
                  <img src={SVG2} alt="tick" />
                </div>
                <p>Avoid spending on taxi fares</p>
              </div>
              <div className="list">
                <div className="rightTick">
                  <img src={SVG2} alt="tick" />
                </div>
                <p>Available</p>
              </div>
              <div className="list">
                <div className="rightTick">
                  <img src={SVG2} alt="tick" />
                </div>
                <p>Advance Booking Recommended</p>
              </div>
            </div>
          </div>
          <div className="cardFooter">
            <button className="button">
              <img src={SVG3} alt="phone" />
            </button>
            <button className="button">
              <img src={SVG4} alt="whats App" />
            </button>
            <button className="button">
              <img src={SVG5} alt="share" />
            </button>
          </div>
        </div>
        <div className="verticalDivider sm-display_none" />
        <div className="aboutWays  sm-display_none">
          <div>
            <p className="title">AED 80</p>
            <div className="list">
              <img className="rightTick" src={SVG1} alt="tick" />
              <p>One-way</p>
            </div>
          </div>
          <div>
            <p className="title">AED 150</p>
            <div className="list">
              <img className="rightTick" src={SVG1} alt="tick" />
              <p>Two-way</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
