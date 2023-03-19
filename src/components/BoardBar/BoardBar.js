import React, { useState } from "react";
import "./BoardBar.scss";
import { AiOutlineStar, AiFillThunderbolt, AiFillStar } from "react-icons/ai";
import { BsFillPeopleFill, BsFilter } from "react-icons/bs";
import { VscChevronDown } from "react-icons/vsc";
import { FaRocket } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";

const BoardBar = () => {
  const [isTickStar, setIsTickStar] = useState(false);
  return (
    <nav className="navbar-board">
      <div className="navbar-board-left">
        <div className="btn-action board-name">Trello clone App</div>
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
        <div className="btn-action display-work-spacing">
          <div className="left-icon">
            <BsFillPeopleFill />
          </div>
          <div>Hiển thị trong Không gian làm việc</div>
        </div>
        <div className="navbar-board-btn-divider" />
        <div className="btn-action board">
          <div className="left-icon">
            <BsFillPeopleFill />
          </div>
          <div>Bảng</div>
        </div>
        <div className="btn-action update-display">
          <VscChevronDown />
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
