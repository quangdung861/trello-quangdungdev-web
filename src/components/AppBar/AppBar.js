import React, { useState } from "react";

import "./AppBar.scss";

import NavApp from "components/AppBar/NavApp/NavApp";
import NavHome from "components/AppBar/Navhome/NavHome";
import WorkSpace from "components/AppBar/WorkSpace/WorkSpace";
import Recently from "components/AppBar/Recently/Recently";
import BoardSaved from "./BoardSaved/BoardSaved";
import AddBoard from "./AddBoard/AddBoard";
import Search from "./Search/Search";
import Notification from "./Notification/Notification";
import Question from "./Question/Question";
import Account from "./Account/Account";

import { Form } from "react-bootstrap";

import { AiOutlineRollback } from "react-icons/ai";

const AppBar = () => {
  const [showBoxSearch, setShowBoxSearch] = useState(false);

  return (
    <>
      <nav className="navbar-app">
        <div className="nav-left">
          <NavApp />
          <NavHome />
          <WorkSpace />
          <Recently />
          <BoardSaved />
          <AddBoard />
        </div>
        <div className="nav-right">
          {!showBoxSearch && (
            <Search
              showBoxSearch={showBoxSearch}
              setShowBoxSearch={setShowBoxSearch}
            />
          )}
          <Notification />
          <Question />

          <Account />
        </div>
      </nav>
      {showBoxSearch && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "7px",
            left: 0,
            right: 0,
            padding: "0px 20px"
          }}
        >
          <div
            className="overlay-pseudo"
            onClick={() => setShowBoxSearch(!showBoxSearch)}
          ></div>
          <div
            style={{
              position: "absolute",
              zIndex: 4,
            }}
          >
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback-active"></span>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Tìm kiếm"
                className="form-control-active"
              />
            </div>
          </div>
          <div className="search-history">
            <div className="header-search-input">
              CÁC BẢNG THÔNG TIN GẦN ĐÂY
            </div>
            <div className="search-item">
              <img
                src="https://trello-backgrounds.s3.amazonaws.com/5755843411a2cd8c83067c03/480x320/cf2d1e29e8e3a4857a5f58f500fb464c/ian-dooley-407846-unsplash.jpg"
                alt=""
                className="search-item-avatar"
              />
              <div>
                <div className="search-item-content">
                  <div className="search-item-header">Trello Clone App</div>
                  <div className="search-item-description">
                    Không gian làm việc Trello
                  </div>
                </div>
              </div>
            </div>
            <div className="search-item">
              <img
                src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg"
                alt=""
                className="search-item-avatar"
              />
              <div>
                <div className="search-item-content">
                  <div className="search-item-header">Trello Clone App</div>
                  <div className="search-item-description">
                    Không gian làm việc Trello
                  </div>
                </div>
              </div>
            </div>
            <div className="search-item">
              <img
                src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/963ddbe30ac0e2ab51ed5ed7403a5143/photo-1523266092241-0077129f31fe.jpg"
                alt=""
                className="search-item-avatar"
              />
              <div>
                <div className="search-item-content">
                  <div className="search-item-header">Trello Clone App</div>
                  <div className="search-item-description">
                    Không gian làm việc Trello
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-search-input">
              <div className="search-advance">
                <div>
                  <span
                    className="fa fa-search form-control-feedback-active"
                    style={{ marginRight: 15 }}
                  ></span>
                  Tìm kiếm nâng cao
                </div>
                <div
                  style={{
                    backgroundColor: "#EEEEEE",
                    color: "#999999",
                    borderRadius: "3px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 24,
                    height: 18,
                  }}
                >
                  <AiOutlineRollback />
                </div>
              </div>
              <div className="search-contribute">
                Giúp chúng tôi cải thiện kết quả tìm kiếm của bạn!
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppBar;
