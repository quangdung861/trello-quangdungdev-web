import React, { useState } from "react";
import "./BoardBar.scss";
import {
  AiOutlineStar,
  AiFillThunderbolt,
  AiFillStar,
  AiOutlineClose,
  AiOutlineLock,
  AiOutlineCheck,
} from "react-icons/ai";
import { BsFillPeopleFill, BsFilter } from "react-icons/bs";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TbBuildingBank } from "react-icons/tb";
import { MdOutlinePublic, MdOutlineDragIndicator } from "react-icons/md";
import { VscChevronDown } from "react-icons/vsc";
import { FaRocket } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiCalendar, BiCalendarAlt } from "react-icons/bi";
import {
  selectAllInlineText,
  seveContentAfterPressEnter,
} from "utilities/contentEditable.js";

import { Form, Button } from "react-bootstrap";

const BoardBar = () => {
  const [isTickStar, setIsTickStar] = useState(false);
  const [isShowDropdown, setIsShowDropDown] = useState("");
  const [titleBoard, setTitleBoard] = useState("Trello Clone App");

  const toggleDropdown = (key) => {
    switch (key) {
      case "display-work-spacing":
        setIsShowDropDown("display-work-spacing");
        break;
      case "update-display":
        setIsShowDropDown("update-display");
        break;
      case "":
        setIsShowDropDown("");
        break;

      default:
        break;
    }
  };
  return (
    <nav className="navbar-board">
      <div className="navbar-board-left">
        <Form.Control
          size="sm"
          type="text"
          placeholder="Enter column title..."
          className="btn-action board-name"
          onKeyDown={(e) => seveContentAfterPressEnter(e)}
          onClick={(e) => selectAllInlineText(e)}
          value={titleBoard}
          onChange={(e) => setTitleBoard(e.target.value)}
        />
        <div
          className="btn-action tick-star"
          onClick={() => setIsTickStar(!isTickStar)}
        >
          {!isTickStar ? (
            <div className="icon-tick-star">
              <AiOutlineStar />
            </div>
          ) : (
            <div className="icon-tick-star-block">
              <AiFillStar />
            </div>
          )}
        </div>
        <div className="navbar-board-btn-divider" />

        <div className="display-work-spacing">
          <div
            className="btn-action btn-display-work-spacing"
            onClick={() => toggleDropdown("display-work-spacing")}
          >
            <div className="left-icon">
              <BsFillPeopleFill />
            </div>
            <div>Hiển thị trong Không gian làm việc</div>
          </div>
          {isShowDropdown === "display-work-spacing" && (
            <div className="dropdown-display-work-spacing">
              <div className="pop-over-header">
                <span className="pop-over-header-title">Khả năng xem</span>
                <span
                  className="pop-over-header-close-btn"
                  onClick={() => toggleDropdown("")}
                >
                  <AiOutlineClose />
                </span>
              </div>
              <div className="pop-over-content">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlineLock
                    style={{ color: "#ED6D5C", marginRight: "5px" }}
                  />
                  Riêng tư
                </div>
                <div className="sub-name">
                  Chỉ các thành viên của nhóm mới có thể xem và sửa bảng này.
                </div>
              </div>
              <div className="pop-over-content">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsFillPeopleFill style={{ marginRight: "5px" }} />
                  Không gian làm việc
                  <AiOutlineCheck
                    style={{ marginLeft: "8px", fontSize: "12px" }}
                  />
                </div>
                <div className="sub-name">
                  Tất cả thành viên của Không gian làm việc Không gian làm việc
                  Trello có thể xem và sửa bảng này.
                </div>
              </div>
              <div className="pop-over-content disabled">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <TbBuildingBank className="icon-right organization-icon" />
                  Tổ chức
                </div>
                <div className="sub-name">
                  Tất cả các thành viên của tổ chức có thể xem bảng này. Bảng
                  cẩn được thêm vào Không gian làm việc doanh nghiệp để kích
                  hoạt chức năng này.
                </div>
              </div>
              <div className="pop-over-content ">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MdOutlinePublic
                    style={{ color: "#61BD4F", marginRight: "5px" }}
                  />
                  Công khai
                </div>
                <div className="sub-name">
                  Bất kì ai trên mạng internet đều có thể xem bảng này. Chỉ các
                  thành viên bảng mới có quyền chỉnh sửa.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="navbar-board-btn-divider" />
        <div className="btn-action board">
          <div className="left-icon">
            <BsFillPeopleFill />
          </div>
          <div>Bảng</div>
        </div>
        <div className="update-display">
          <div
            className="btn-action btn-update-display"
            onClick={() => toggleDropdown("update-display")}
          >
            <VscChevronDown />
          </div>
          {isShowDropdown === "update-display" && (
            <div className="dropdown-update-display">
              <div className="pop-over-header">
                <span className="pop-over-header-title">
                  Nâng cấp Chế độ xem
                </span>
                <span
                  className="pop-over-header-close-btn"
                  onClick={() => toggleDropdown("")}
                >
                  <AiOutlineClose />
                </span>
              </div>

              <div className="pop-over-content">
                <div className="pop-over-content-item disabled-item">
                  <div className="content-item-left">
                    <MdOutlineDragIndicator className="icon-move" />
                    <input
                      className="form-check-input checkbox-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                      disabled
                    />
                    <label
                      className="form-check-label checkbox-label"
                      htmlFor="flexCheckChecked"
                    >
                      <HiOutlineViewBoards />
                      Bảng
                    </label>
                  </div>
                  <div className="content-item-right">
                    {/* <AiOutlineLock /> */}
                  </div>
                </div>
                <div className="pop-over-content-item">
                  <div className="content-item-left  ">
                    <MdOutlineDragIndicator />
                    <input
                      className="form-check-input checkbox-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked-2"
                    />
                    <label
                      className="form-check-label checkbox-label"
                      htmlFor="flexCheckChecked-2"
                    >
                      <BiCalendar />
                      Lịch
                    </label>
                  </div>
                  <div className="content-item-right">
                    <AiOutlineLock />
                  </div>
                </div>
                <div className="pop-over-content-item ">
                  <div className="content-item-left ">
                    <MdOutlineDragIndicator />
                    <input
                      className="form-check-input checkbox-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked-3"
                    />
                    <label
                      className="form-check-label checkbox-label"
                      htmlFor="flexCheckChecked-3"
                    >
                      <BiCalendarAlt />
                      <span>Lịch trình</span>
                    </label>
                  </div>
                  <div className="content-item-right">
                    <AiOutlineLock />
                  </div>
                </div>
              </div>

              <div className="pop-over-footer">
                <div className="title-footer">
                  Xem công việc của bạn theo những cách mới
                </div>
                <div className="des-footer">
                  Xem các lịch trình chính, nhiệm vụ, dữ liệu và hơn thế nữa
                  trực tiếp từ bảng Trello của bạn với Trello Premium.
                </div>
                <Button className="btn-try-free" variant="primary" size="sm">
                  Bắt đầu dùng thử miễn phí
                </Button>
                <div className="learn-more-trello">
                  Tìm hiểu thêm về Trello Premium
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-board-right">
        <div className="btn-action add-ons">
          <div className="left-icon">
            <FaRocket />
          </div>
          <div>Tiện ích bổ sung</div>
        </div>
        <div className="btn-action add-ons">
          <div className="left-icon">
            <AiFillThunderbolt />
          </div>
          <div>Tự động hóa</div>
        </div>
        <div className="navbar-board-btn-divider" />
        <div className="btn-action add-ons">
          <div className="left-icon">
            <BsFilter />
          </div>
          <div>Lọc</div>
        </div>
        <div className="navbar-board-btn-divider" />
        <div className="account">
          <div className="avatar"> PD </div>
        </div>
        <div className="btn-action share-board">
          <div className="left-icon">
            <RiUserAddFill />
          </div>
          <div>Chia sẻ</div>
        </div>
        <div className="navbar-board-btn-divider" />
        <div className="btn-action board-menu">
          <FiMoreHorizontal />
        </div>
      </div>
    </nav>
  );
};

export default BoardBar;
