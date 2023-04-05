import React, { useContext } from "react";

import BoardBar from "components/BoardBar/BoardBar";
import BoardContent from "components/BoardContent/BoardContent";

import "./Board.scss";
import { MyContext } from "App";

const Board = () => {
  const { hiddenSidebar, isShowMenu, setIsShowMenu } = useContext(MyContext);
  return (
    <div
      className={
        hiddenSidebar
          ? isShowMenu
            ? "extend-board is-show-menu"
            : "extend-board"
          : isShowMenu
            ? "compact-board is-show-menu"
            : "compact-board"
      }
    >
      <BoardBar />
      <BoardContent />
    </div>
  );
};

export default Board;
