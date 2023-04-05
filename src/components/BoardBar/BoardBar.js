import React, { useState, useContext } from "react";
import "./BoardBar.scss";
import {
  AiOutlineStar,
  AiFillThunderbolt,
  AiFillStar,
  AiOutlineClose,
  AiOutlineLock,
  AiOutlineCheck,
  AiOutlineNotification,
} from "react-icons/ai";
import {
  BsFillPeopleFill,
  BsFilter,
  BsFillMenuButtonWideFill,
} from "react-icons/bs";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TbBuildingBank } from "react-icons/tb";
import {
  MdOutlinePublic,
  MdOutlineDragIndicator,
  MdOutlineMail,
} from "react-icons/md";

import { FcSalesPerformance } from "react-icons/fc";
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

import ModalShareBoard from "./components/ModalShareBoard";

import { MyContext } from "App";

const BoardBar = () => {
  const [isTickStar, setIsTickStar] = useState(false);
  const [isShowDropdown, setIsShowDropDown] = useState("");
  const [titleBoard, setTitleBoard] = useState("Trello Clone App");

  const { isShowMenu, setIsShowMenu } = useContext(MyContext);

  const toggleDropdown = (key) => {
    switch (key) {
      case "display-work-spacing":
        setIsShowDropDown("display-work-spacing");
        break;
      case "update-display":
        setIsShowDropDown("update-display");
        break;
      case "add-ons":
        setIsShowDropDown("add-ons");
        break;
      case "automation":
        setIsShowDropDown("automation");
        break;
      case "":
        setIsShowDropDown("");
        break;

      default:
        break;
    }
  };
  return (
    <div>
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
                    Tất cả thành viên của Không gian làm việc Không gian làm
                    việc Trello có thể xem và sửa bảng này.
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
                    Bất kì ai trên mạng internet đều có thể xem bảng này. Chỉ
                    các thành viên bảng mới có quyền chỉnh sửa.
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
          <div className="add-ons">
            <div
              className="btn-action btn-add-ons"
              onClick={() => toggleDropdown("add-ons")}
            >
              <div className="left-icon">
                <FaRocket />
              </div>
              <div>Tiện ích bổ sung</div>
            </div>
            {isShowDropdown === "add-ons" && (
              <div className="dropdown-add-ons">
                <div className="pop-over-header">
                  <span className="pop-over-header-title">
                    Tiện ích bổ sung
                  </span>
                  <span
                    className="btn-pop-over-header-close"
                    onClick={() => toggleDropdown("")}
                  >
                    <AiOutlineClose />
                  </span>
                </div>
                <div className="pop-over-content">
                  <img
                    src="https://a.trellocdn.com/prgb/assets/42f8533548e4eeb72589.png"
                    alt=""
                    className="img-content-center"
                  />
                  <div className="des-content">
                    Đưa các tính năng bổ sung vào các bảng của bạn và tích hợp
                    các ứng dụng như Google Drive, Slack, và hơn thế nữa.
                  </div>
                  <Button
                    className="btn-add-ons-bottom"
                    variant="primary"
                    size="sm"
                  >
                    Thêm tiện ích bổ sung
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="automation">
            <div
              className="btn-action btn-automation"
              onClick={() => toggleDropdown("automation")}
            >
              <div className="left-icon">
                <AiFillThunderbolt />
              </div>
              <div>Tự động hóa</div>
            </div>
            {isShowDropdown === "automation" && (
              <div className="dropdown-automation">
                <div className="pop-over-header">
                  <span className="pop-over-header-title">Tự động hóa</span>
                  <span
                    className="btn-pop-over-header-lose"
                    onClick={() => toggleDropdown("")}
                  >
                    <AiOutlineClose />
                  </span>
                </div>
                <div className="pop-over-content">
                  <div className="pop-over-item">
                    <div className="item-name">
                      <FcSalesPerformance />
                      <div>Quy tắc</div>
                    </div>
                    <div className="item-description">
                      Tạo các quy tắc tự động phản hồi các thao tác, lịch hoặc
                      ngày đến hạn của thẻ.
                    </div>
                  </div>
                  <div className="pop-over-item">
                    <div className="item-name">
                      <BsFillMenuButtonWideFill />
                      <div>Các nút</div>
                    </div>
                    <div className="item-description">
                      Tạo các nút tùy chỉnh ở mặt sau của mỗi thẻ hoặc ở đầu
                      bảng.
                    </div>
                  </div>
                  <div className="pop-over-item">
                    <div className="item-name">
                      <MdOutlineMail />
                      <div>Báo cáo email</div>
                    </div>
                    <div className="item-description">
                      Thiết lập báo cáo qua email, chẳng hạng như bản tóm tắt
                      hàng tuần về tất cả các thẻ đến hạn trong vòng 7 ngày.
                    </div>
                  </div>
                  <div className="pop-over-item">
                    <div className="item-name">
                      <AiOutlineNotification />
                      <div>Gửi phản hồi</div>
                    </div>
                    <div className="item-description">
                      Giúp chúng tôi cải thiện tự động hóa của
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="navbar-board-btn-divider" />
          <div className="filter">
            <div className="btn-action btn-filter">
              <div className="left-icon">
                <BsFilter />
              </div>
              <div>Lọc</div>
            </div>
          </div>
          <div className="navbar-board-btn-divider" />
          <div className="account">
            <div className="avatar"> PD </div>
          </div>
          <div className="share-board">
            <button
              className="btn-action btn-share-board btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              <div className="left-icon">
                <RiUserAddFill />
              </div>
              <div>Chia sẻ</div>
            </button>
          </div>

          <div className="navbar-board-btn-divider" />
          <div className="board-menu">
            <div
              className="btn-action btn-board-menu"
              onClick={() => setIsShowMenu(!isShowMenu)}
            >
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
      </nav>

      <ModalShareBoard />
    </div>
  );
};

export default BoardBar;
