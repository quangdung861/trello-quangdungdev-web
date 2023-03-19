import React, { useContext } from "react";

import BoardBar from "components/BoardBar/BoardBar";
import BoardContent from "components/BoardContent/BoardContent";

import "./Board.scss";
import { MyContext } from "App";

const Board = () => {
  const { hiddenSidebar } = useContext(MyContext);
  return (
    <div className={hiddenSidebar ? "extend-board" : "compact-board"}>
      <BoardBar />
      <BoardContent />
    </div>
  );
};

export default Board;
