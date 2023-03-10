import React, { useState } from "react";
import { IoApps } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillCompass } from "react-icons/ai";

import "./NavApp.scss";

const NavApp = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showPseudoOverlay, setShowPseudoOverlay] = useState(false);

  const toggleActionBar = (key) => {
    switch (key) {
      case "nav-app":
        setShowDropDown(!showDropDown);
        setShowPseudoOverlay(!showPseudoOverlay);
        break;

      default:
        break;
    }
  };

  return (
    <>
      {showPseudoOverlay && (
        <div
          className="pseudo-overlay"
          onClick={() => toggleActionBar("nav-app")}
        ></div>
      )}
      <div
        className="nav-app"
        onClick={() => toggleActionBar("nav-app")}
        style={
          showDropDown ? { backgroundColor: "rgba(255, 255, 255, 0.3)" } : {}
        }
      >
        <IoApps style={{ fontSize: "18px" }} />
      </div>
      {showDropDown && (
        <div className="nav-app-dropdown">
          <section className="switchTo_section">
            <div>
              <a href="#" className="switch-link">
                <span className="switch-title">
                  Bắt đầu sử dụng sản phẩm Atlassian
                </span>
                <BiLinkExternal />
              </a>
            </div>
            <div className="switch-to-trello">
              <a href="#">
                <img
                  src="https://w7.pngwing.com/pngs/115/721/png-transparent-trello-social-icons-icon.png"
                  style={{ width: 32, height: 32, marginRight: 5 }}
                  alt=""
                />
                <span style={{ color: "black" }}>Trello</span>
              </a>
            </div>
          </section>
          <section className="discover-section">
            <div>
              <span className="title-section">KHÁM PHÁ</span>
            </div>
            <div className="item-section">
              <div className="cover-img">
                <img
                  src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/confluence/icons/blue.svg"
                  style={{ width: 24, height: 24 }}
                  alt=""
                />
              </div>
              <div>
                <div className="item-section-title">
                  <div>Confluence</div>
                  <div className="item-section-tag">DÙNG THỬ</div>
                </div>
                <div className="item-section-description">
                  Cộng tác tài liệu
                </div>
              </div>
            </div>
            <div className="item-section">
              <div className="cover-img">
                <img
                  src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/jira-software/icons/blue.svg"
                  style={{ width: 24, height: 24 }}
                  alt=""
                />
              </div>

              <div>
                <div className="item-section-title">
                  <div>Jira Software</div>
                </div>
                <div className="item-section-description">
                  Theo dõi dự án và lỗi
                </div>
              </div>
            </div>
            <div className="item-section">
              <div className="cover-img">
                <img
                  src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/jira-service-management/icons/blue.svg"
                  style={{ width: 24, height: 24 }}
                  alt=""
                />
              </div>
              <div>
                <div className="item-section-title">
                  <div>Jira Service Management</div>
                </div>
                <div className="item-section-description">
                  Quản lý dịch vụ CNTT cộng tác
                </div>
              </div>
            </div>
            <div className="item-section">
              <div className="cover-img">
                <AiFillCompass
                  style={{ width: 24, height: 24, color: "#57647B" }}
                />
              </div>
              <div>
                <div className="item-section-title">
                  <div>Sản phẩm khác của Atlassian</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default NavApp;
