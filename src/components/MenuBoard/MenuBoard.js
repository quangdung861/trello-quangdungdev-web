import React, { useContext } from "react";
import { MyContext } from "App";
import {
  AiOutlineClose,
  AiFillThunderbolt,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaTrello } from "react-icons/fa";
import { MdOutlineHorizontalSplit, MdMoreHoriz } from "react-icons/md";
import { BiSticker, BiRocket } from "react-icons/bi";

import "./MenuBoard.scss";

const MenuBoard = () => {
  const { isShowMenu, setIsShowMenu } = useContext(MyContext);
  return (
    <div className={isShowMenu ? "menu-board" : "menu-board is-hidden"}>
      <div className="board-menu-header">
        <span className="board-menu-header-title">Menu</span>
        <span
          className="board-menu-header-close-btn"
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <AiOutlineClose />
        </span>
      </div>
      <div className="board-menu-content-frame">
        <div className="board-menu-navigation-list">
          <div className="board-menu-navigation-item">
            <div className="avatar-left">
              <FaTrello />
            </div>
            <div className="content-right">
              <div className="navigation-name">Về bảng này</div>
              <div className="navigation-description">
                Thêm mô tả vào bảng của bạn
              </div>
            </div>
          </div>
          <div className="board-menu-navigation-item">
            <div className="avatar-left">
              <img
                src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/1a16bbb01d70aa6316447194824cb912/photo-1658563309427-6e703a70203c.jpg"
                alt=""
              />
            </div>
            <div className="content-right">
              <div className="navigation-name">Thay đổi hình nền</div>
              <div className="navigation-description"></div>
            </div>
          </div>
          <div className="board-menu-navigation-item">
            <div className="avatar-left">
              <MdOutlineHorizontalSplit />
            </div>
            <div className="content-right">
              <div className="navigation-name">Trường tùy chỉnh</div>
              <div className="navigation-description"></div>
            </div>
          </div>
          <div className="board-menu-navigation-item">
            <div className="avatar-left">
              <BiSticker />
            </div>
            <div className="content-right">
              <div className="navigation-name">Các nhãn dán</div>
              <div className="navigation-description"></div>
            </div>
          </div>
          <div className="board-menu-navigation-item">
            <div className="avatar-left">
              <MdMoreHoriz />
            </div>
            <div className="content-right">
              <div className="navigation-name">Thêm</div>
              <div className="navigation-description"></div>
            </div>
          </div>
          <div className="division-line"></div>
          <div className="board-menu-navigation-item">
            <div className="avatar-left">
              <AiFillThunderbolt />
            </div>
            <div className="content-right">
              <div className="navigation-name">Tự động hóa</div>
              <div className="navigation-description">
                Tự động hóa các thẻ và hơn thế nữa...
              </div>
            </div>
          </div>
          <div className="division-line"></div>
          <div className="board-menu-navigation-item">
            <div className="avatar-left">
              <BiRocket />
            </div>
            <div className="content-right">
              <div className="navigation-name">Tiện ích bổ sung</div>
              <div className="navigation-description">
                Google Drive và hơn thế nữa...
              </div>
            </div>
          </div>
          <div className="division-line"></div>
          <div className="board-menu-navigation-item">
            <div className="avatar-left">
              <AiOutlineUnorderedList />
            </div>
            <div className="content-right">
              <div className="navigation-name">Hoạt động</div>
              <div className="navigation-description"></div>
            </div>
          </div>
        </div>
        <div className="menu-action-list">
          <div className="action-item">
            <div className="action-item-left">
              <div className="action-item-avatar">PD</div>
            </div>
            <div className="action-item-right">
              <div className="action-item-content">
                <span className="action-item-user-name">Phan Quang Dũng </span>
                <span>
                  đã di chuyển thẻ ABC từ danh sách TO DO tới danh sách DOING
                </span>
              </div>
              <div className="action-item-date">19 tháng 3 lúc 14:48</div>
            </div>
          </div>
          <div className="action-item">
            <div className="action-item-left">
              <div className="action-item-avatar">PD</div>
            </div>
            <div className="action-item-right">
              <div className="action-item-content">
                <span className="action-item-user-name">Phan Quang Dũng </span>
                <span>
                  đã di chuyển thẻ ABC từ danh sách TO DO tới danh sách DOING
                </span>
              </div>
              <div className="action-item-date">19 tháng 3 lúc 14:48</div>
            </div>
          </div>
          <div className="action-item">
            <div className="action-item-left">
              <div className="action-item-avatar">PD</div>
            </div>
            <div className="action-item-right">
              <div className="action-item-content">
                <span className="action-item-user-name">Phan Quang Dũng </span>
                <span>
                  đã di chuyển thẻ ABC từ danh sách TO DO tới danh sách DOING
                </span>
              </div>
              <div className="action-item-date">19 tháng 3 lúc 14:48</div>
            </div>
          </div>
          <div className="action-item">
            <div className="action-item-left">
              <div className="action-item-avatar">PD</div>
            </div>
            <div className="action-item-right">
              <div className="action-item-content">
                <span className="action-item-user-name">Phan Quang Dũng </span>
                <span>
                  đã di chuyển thẻ ABC từ danh sách TO DO tới danh sách DOING
                </span>
              </div>
              <div className="action-item-date">19 tháng 3 lúc 14:48</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBoard;
