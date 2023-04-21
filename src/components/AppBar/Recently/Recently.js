import React, { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import "./Recently.scss";

const Recently = () => {
  const [showDropdownRecently, setShowDropdownRecently] = useState(false);
  const [isTickStar, setIsTickStar] = useState(false);

  return (
    <div className="recently">
      {showDropdownRecently && (
        <div
          className="speudo-overlay"
          onClick={() => setShowDropdownRecently(!showDropdownRecently)}
        ></div>
      )}

      <div
        className="button-recently"
        onClick={() => setShowDropdownRecently(!showDropdownRecently)}
        style={
          showDropdownRecently ? { backgroundColor: "rgba(255, 255, 255, 0.3)" } : {}
        }
      >
        Gần đây
        <VscChevronDown style={{ fontSize: "18px", marginLeft: "3px" }} />
      </div>
      {showDropdownRecently && (
        <div className="dropdown-recently">
          <div className="dropown-recently-item">
            <img
              src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"
              alt=""
            />

            <div className="dropdown-recently-box">
              <div className="dropdown-recently-content">
                <div className="dropdown-recently-title">Trello Clone App</div>
                <div className="dropdown-recently-description">
                  không gian làm việc Trello
                </div>
              </div>
              {isTickStar ? (
                <div className="icon-tick-star">
                  <AiOutlineStar onClick={() => setIsTickStar(!isTickStar)} />
                </div>
              ) : (
                <div className="icon-tick-star-block">
                  <AiFillStar onClick={() => setIsTickStar(!isTickStar)} />
                </div>
              )}
            </div>
          </div>

          <div className="dropown-recently-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG"
              alt=""
            />

            <div className="dropdown-recently-box">
              <div className="dropdown-recently-content">
                <div className="dropdown-recently-title">
                  Bảng không có tiêu đề
                </div>
                <div className="dropdown-recently-description">
                  không gian làm việc Trello
                </div>
              </div>
              {isTickStar ? (
                <div className="icon-tick-star">
                  <AiOutlineStar onClick={() => setIsTickStar(!isTickStar)} />
                </div>
              ) : (
                <div className="icon-tick-star-block">
                  <AiFillStar onClick={() => setIsTickStar(!isTickStar)} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recently;
