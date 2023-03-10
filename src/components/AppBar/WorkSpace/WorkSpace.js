import React, { useState } from "react";
import { IoApps } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillCompass } from "react-icons/ai";

import { VscChevronDown } from "react-icons/vsc";

import "./WorkSpace.scss";

const WorkSpace = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showPseudoOverlay, setShowPseudoOverlay] = useState(false);

  const toggleActionBar = () => {
    setShowDropDown(!showDropDown);
    setShowPseudoOverlay(!showPseudoOverlay);
  };

  return (
    <>
      {showPseudoOverlay && (
        <div className="pseudo-overlay" onClick={() => toggleActionBar()}></div>
      )}
      <div
        className="work-space"
        style={
          showDropDown ? { backgroundColor: "rgba(255, 255, 255, 0.3)" } : {}
        }
        onClick={() => toggleActionBar()}
      >
        Các Không gian làm việc
        <VscChevronDown style={{ fontSize: "18px", marginLeft: "3px" }} />
      </div>
      {showDropDown && (
        <div className="work-space-dropdown">
          <section className="current-work-space">
            <div className="title-current-work-space">
              <span
                style={{ fontSize: 12, color: "#5E6C84", fontWeight: "bold" }}
              >
                Không gian làm việc hiện tại
              </span>
            </div>
            <div className="item-current-work-space">
              <div className="avatar-current-work-space">K</div>
              <span>Không gian làm việc Trello</span>
            </div>
          </section>
          <section className="saved-work-space">
            <div className="title-saved-work-space">
              <span
                style={{ fontSize: 12, color: "#5E6C84", fontWeight: "bold" }}
              >
                Các Không gian làm việc của bạn
              </span>
            </div>
            <div className="item-saved-work-space">
              <div className="avatar-saved-work-space">K</div>
              <span>Không gian làm việc Trello</span>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default WorkSpace;
