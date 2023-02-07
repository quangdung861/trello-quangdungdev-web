import React, { useState, useEffect } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { drop, isEmpty, set } from "lodash";

import "./BoardContent.scss";
import Column from "components/Column/Column";
import { mapOrder } from "utilities/sorts";
import { applyDrag } from "utilities/dragDrop";

import { initialData } from "actions/initialData";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDB) {
      setBoard(boardFromDB);

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, "id"));
    }
  }, []);

  if (isEmpty(board)) {
    return (
      <div className="not-found" style={{ padding: "10px", color: "white" }}>
        Board not found!
      </div>
    );
  }

  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);
    board.columns = newColumns;

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((column) => column.id);

    setColumns(newColumns);
    setBoard(newBoard);
  };

  // Create by QuangDungDev
  // const onCardDrop = (columnId, dropResult) => {
  //   const newColumns = [...columns];
  //   if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
  //     if (dropResult.removedIndex !== null) {
  //       newColumns
  //         .find((column) => column.id === columnId)
  //         .cards.splice(dropResult.removedIndex, 1);

  //       newColumns.find((column) => column.id === columnId).cardOrder = newColumns
  //         .find((column) => column.id === columnId)
  //         .cards.map((card) => card.id);
  //     }
  //     if (dropResult.addedIndex !== null) {
  //       newColumns
  //         .find((column) => column.id === columnId)
  //         .cards.splice(dropResult.addedIndex, 0, dropResult.payload);

  //       newColumns.find((column) => column.id === columnId).cardOrder = newColumns
  //         .find((column) => column.id === columnId)
  //         .cards.map((card) => card.id);
  //     }
  //   }

  //   setColumns(newColumns);
  // };

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const newColumns = [...columns];

      const currentColumn = newColumns.find((c) => c.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((c) => c.id);

      setColumns(newColumns);
    }
  };

  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dragClass="column-ghost"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "column-drop-preview",
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} onCardDrop={onCardDrop} />
          </Draggable>
        ))}
      </Container>
      <div className="add-new-column">
        <i className="fa fa-plus icon" />
        Add another column
      </div>
    </div>
  );
};

export default BoardContent;
