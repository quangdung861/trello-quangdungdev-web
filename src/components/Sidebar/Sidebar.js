import React, { useState, useContext } from "react";

import { MdArrowBackIos } from "react-icons/md";
import { FaTrello, FaRegCalendarAlt } from "react-icons/fa";
import { VscAccount, VscChevronDown } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { AiOutlinePlus, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { CgClapperBoard } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsFillBagCheckFill, BsChevronRight } from "react-icons/bs";

import "./Sidebar.scss";
import { MyContext } from "App";

const Sidebar = () => {
  const [isTickStar, setIsTickStar] = useState(false);
  const { hiddenSidebar, setHiddenSidebar } = useContext(MyContext);

  return (
    <>
      {hiddenSidebar ? (
        <div
          className="sidebar-hidden"
          onClick={() => setHiddenSidebar(!hiddenSidebar)}
        >
          <div className="btn-show-sidebar">
            <BsChevronRight />
          </div>
        </div>
      ) : (
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-header-avatar">
              <img
                src="https://trello-backgrounds.s3.amazonaws.com/575584dacedaafdf0d8660c2/480x272/02a67bbc2d5b879d912dad85eb5f3a05/asset_3.png"
                alt=""
              />
            </div>
            <div className="sidebar-header-content">
              <div className="sidebar-header-title">
                Không gian làm việc Trello
              </div>
              <div className="sidebar-header-description">Miễn phí</div>
            </div>
            <div
              className="hide-sidebar"
              onClick={() => setHiddenSidebar(!hiddenSidebar)}
            >
              <MdArrowBackIos className="hide-sidebar-icon" />
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-collapsible-list">
              <div className="sidebar-item">
                <div className="sidebar-item-left">
                  <FaTrello className="icon-left" />
                </div>
                <div className="sidebar-item-title">Bảng</div>
                <div className="sidebar-item-right"></div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-item-left">
                  <VscAccount />
                </div>
                <div className="sidebar-item-title">Thành viên</div>
                <div className="sidebar-item-right">
                  <AiOutlinePlus className="icon-right" />
                </div>
              </div>
              <div
                className="sidebar-item"
                style={{ padding: "6px 10px 6px 15px", marginBottom: "8px" }}
              >
                <div className="sidebar-item-left">
                  <IoMdSettings className="icon-left" />
                </div>
                <div className="sidebar-item-title">
                  Các cài đặt Không gian làm việc
                </div>
                <div>
                  <VscChevronDown className="icon-right" />
                </div>
              </div>
            </div>
            <div className="sidebar-collapsible-list">
              <div
                style={{
                  fontWeight: 600,
                  padding: "4px 0px 4px 12px",
                  lineHeight: "24px",
                }}
              >
                Dạng xem Không gian làm việc
              </div>
              <div className="sidebar-item" title="Bảng">
                <div className="sidebar-item-left">
                  <CgClapperBoard />
                </div>
                <div className="sidebar-item-title">Bảng</div>
                <div className="sidebar-item-right-hidden">
                  <FiMoreHorizontal className="icon-right" />
                </div>
              </div>
              <div className="sidebar-item" title="Bảng">
                <div className="sidebar-item-left">
                  <FaRegCalendarAlt />
                </div>
                <div className="sidebar-item-title">Lịch</div>
                <div className="sidebar-item-right-hidden">
                  <FiMoreHorizontal className="icon-right" />
                </div>
              </div>
            </div>
            <div className="sidebar-collapsible-list">
              <div
                style={{
                  fontWeight: 600,
                  padding: "4px 0px 4px 12px",
                  lineHeight: "24px",
                }}
                className="sidebar-collapsible-title"
              >
                <div className="title-list">Các Bảng của bạn</div>
                <div className="list-more">
                  <FiMoreHorizontal className="icon-list-more" />
                </div>
                <div className="action-title-list">
                  <AiOutlinePlus className="list-icon-right" />
                </div>
              </div>
              <div
                className="sidebar-item"
                style={{ backgroundColor: "hsla(0, 0%, 100%, 0.2)" }}
              >
                <div className="sidebar-item-left">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1849a4a0cc47bd7f5c6e08a06cf3affa/photo-1516553174826-d05833723cd4.jpg"
                    alt=""
                  />
                </div>
                <div className="sidebar-item-title">Trello Clone App</div>
                <div className="sidebar-item-right-hidden">
                  <FiMoreHorizontal className="icon-right" />
                </div>
                <div className="icon-tick-star">
                  {!isTickStar ? (
                    <AiOutlineStar
                      onClick={() => setIsTickStar(!isTickStar)}
                      title="Bấm để gắn sao cho Trello Clone App. Bảng này sẽ được thêm vào danh sách được đánh dấu của bạn."
                    />
                  ) : (
                    <AiFillStar
                      onClick={() => setIsTickStar(!isTickStar)}
                      title="Bấm để gở sao cho Trello Clone App. Bảng này sẽ được gở khỏi danh sách được đánh dấu của bạn."
                    />
                  )}
                </div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-item-left">
                  <VscChevronDown
                    style={{ marginLeft: "-3px", marginRight: "4px" }}
                  />
                </div>
                <div className="sidebar-item-title">Hiển thị nhiều hơn</div>
                <div className="item-count">2</div>
              </div>
            </div>
          </div>
          <div className="sidebar-footer">
            <div className="btn-try-premium-free">
              <BsFillBagCheckFill className="icon-btn-try-premium-free" />
              <div>Dùng thử Premium miễn phí</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
