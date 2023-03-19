import React, { useState, createContext } from "react";
import "./App.scss";

import AppBar from "components/AppBar/AppBar";
import BoardBar from "components/BoardBar/BoardBar";
import BoardContent from "components/BoardContent/BoardContent";
import Sidebar from "components/Sidebar/Sidebar";
import Board from "components/Board/Board";

export const MyContext = createContext();

function App() {
  const [hiddenSidebar, setHiddenSidebar] = useState(false);

  return (
    <MyContext.Provider value={{ hiddenSidebar, setHiddenSidebar }}>
      <div className="trello-quangdungdev-master">
        <AppBar />
        <div className="board-and-sidebar">
          <Board />

          <Sidebar />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
