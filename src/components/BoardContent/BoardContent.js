import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { isEmpty } from "lodash";
import {
  Container as BootstrapContainer,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

import "./BoardContent.scss";
import Column from "components/Column/Column";
import { mapOrder } from "utilities/sorts";
import { applyDrag } from "utilities/dragDrop";

import { initialData } from "actions/initialData";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  console.log("🚀 ~ file: BoardContent.js:21 ~ BoardContent ~ board", board)
  const [columns, setColumns] = useState([]);
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const newColumnInputRef = useRef(null);

  useLayoutEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDB) {
      setBoard(boardFromDB);

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, "id"));
    }
  }, []);

  useLayoutEffect(() => {
    if (newColumnInputRef && newColumnInputRef.current) {
      newColumnInputRef.current.focus();
      newColumnInputRef.current.select();
    }
  }, [openNewColumnForm]);

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

  const toggleOpenNewcolumn = () => setOpenNewColumnForm(!openNewColumnForm);

  const onNewColumnTitleChange = (e) => setNewColumnTitle(e.target.value);

  const addNewColumn = () => {
    if (!newColumnTitle) {
      newColumnInputRef.current.focus();
      return;
    }
    const newColumnToAdd = {
      // Create by QuangDungDev
      // id: `column-${parseInt(columns[columns.length - 1].id.substr(length - 1)) + 1}`
      id: Math.random().toString(36).substr(2, 5),
      boardId: board.id,
      title: newColumnTitle.trim(),
      cardOrder: [],
      cards: [],
    };

    let newColumns = [...columns];
    newColumns.push(newColumnToAdd);

    let newBoard = { ...board };
    newBoard.columnOrder.push(newColumnToAdd.id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);

    setNewColumnTitle("");
    toggleOpenNewcolumn();
  };

  const onUpdateColumn = (newColumnToUpdate) => {
    const columnIdToUpdate = newColumnToUpdate.id;

    let newColumns = [...columns];

    const columnIndexToUpdate = newColumns.findIndex(
      (c) => c.id === columnIdToUpdate
    );

    if (newColumnToUpdate._destroy) {
      // remove column
      newColumns.splice(columnIndexToUpdate, 1);
    } else {
      // update column info
      newColumns.splice(columnIndexToUpdate, 1, newColumnToUpdate);
    }

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((column) => column.id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);
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
            <Column
              column={column}
              onCardDrop={onCardDrop}
              onUpdateColumn={onUpdateColumn}
            />
          </Draggable>
        ))}
      </Container>

      <BootstrapContainer className="quangdungdev-trello-container">
        {!openNewColumnForm ? (
          <Row>
            <Col
              className="add-new-column"
              onClick={() => toggleOpenNewcolumn()}
            >
              <i className="fa fa-plus icon" />
              Add another column
            </Col>
          </Row>
        ) : (
          <Row>
            <Col className="enter-new-column">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter column title..."
                className="input-enter-new-column"
                onChange={(e) => onNewColumnTitleChange(e)}
                onKeyDown={(e) => e.key === "Enter" && addNewColumn()}
                value={newColumnTitle}
                ref={newColumnInputRef}
              />
              <Button
                variant="success"
                size="sm"
                onClick={() => addNewColumn()}
              >
                Thêm danh sách
              </Button>
              <span className="cancel-new-column">
                <i
                  className="fa fa-trash icon"
                  onClick={() => toggleOpenNewcolumn()}
                />
              </span>
            </Col>
          </Row>
        )}
      </BootstrapContainer>
    </div>
  );
};

export default BoardContent;
