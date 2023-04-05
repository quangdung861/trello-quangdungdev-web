import React, { useState, createContext } from "react";
import "./App.scss";

import AppBar from "components/AppBar/AppBar";
import BoardBar from "components/BoardBar/BoardBar";
import BoardContent from "components/BoardContent/BoardContent";
import Sidebar from "components/Sidebar/Sidebar";
import Board from "components/Board/Board";
import MenuBoard from "components/MenuBoard/MenuBoard";

export const MyContext = createContext();

function App() {
  const [hiddenSidebar, setHiddenSidebar] = useState(false);

  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <MyContext.Provider
      value={{ hiddenSidebar, setHiddenSidebar, isShowMenu, setIsShowMenu }}
    >
      <div className="trello-quangdungdev-master">
        <AppBar />
        <div className="board-and-sidebar">
          <MenuBoard />
          <Board />

          <Sidebar />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
