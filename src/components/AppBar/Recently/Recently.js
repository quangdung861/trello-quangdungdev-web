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
              src="https://cdn.cyfoethnaturiol.cymru/media/695524/69562_gwydir-forest-park_natural-resources-wales_no-restrictions_n_a-2-2.jpg?center=0.3325,0.48833333333333334&mode=crop&quality=80&width=1024&height=550&rnd=133159418730000000"
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
