import React, { useEffect, useRef, useState, useContext } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { Dropdown, Form, Button } from "react-bootstrap";
import { cloneDeep } from "lodash";

import "./Column.scss";
import Card from "components/Card/Card";
import ConfirmModal from "components/Common/ConfirmModal";
import { mapOrder } from "utilities/sorts";
import { MODAL_ACTION_CLOSE } from "utilities/constants";
import { MODAL_ACTION_CONFIRM } from "utilities/constants";
import {
  selectAllInlineText,
  seveContentAfterPressEnter,
} from "utilities/contentEditable";
import { MyContext } from "App";

const Column = ({ column, onCardDrop, onUpdateColumn }) => {
  const { hiddenSidebar } = useContext(MyContext);
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [newCardTitle, setNewCardTitle] = useState("");
  const onNewCardTitleChange = (e) => setNewCardTitle(e.target.value);

  const [openNewCardForm, setOpenNewCardForm] = useState(false);
  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm);

  const newCardTextareRef = useRef(null);

  useEffect(() => {
    if (newCardTextareRef && newCardTextareRef.current) {
      newCardTextareRef.current.focus();
      newCardTextareRef.current.select();
    }
  }, [openNewCardForm]);

  const toggleShowConfirmModal = (type) => {
    if (type === MODAL_ACTION_CLOSE) {
      setShowConfirmModal(!showConfirmModal);
      return;
    }
    if (type === MODAL_ACTION_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true,
      };
      onUpdateColumn(newColumn);
      setShowConfirmModal(!showConfirmModal);
      return;
    }
  };

  const [columnTitle, setColumnTitle] = useState("");

  useEffect(() => {
    setColumnTitle(column.title);
  }, [column.title]);

  const handleColumnTitleChange = (e) => {
    setColumnTitle(e.target.value);
  };

  const handleColumnTitleBlur = () => {
    const newColumn = {
      ...column,
      title: columnTitle,
    };
    onUpdateColumn(newColumn);
  };

  const addNewCard = () => {
    if (!newCardTitle) {
      newCardTextareRef.current.focus();
      return;
    }

    const newCardToAdd = {
      // Create by QuangDungDev
      // id: `column-${parseInt(columns[columns.length - 1].id.substr(length - 1)) + 1}`
      id: Math.random().toString(36).substr(2, 5),
      boardId: column.boardId,
      columnId: column.id,
      title: newCardTitle.trim(),
      cover: null,
    };

    let newColumn = cloneDeep(column);
    newColumn.cards.push(newCardToAdd);
    newColumn.cardOrder.push(newCardToAdd.id);
    onUpdateColumn(newColumn);
    setNewCardTitle("");
    toggleOpenNewCardForm();
  };

  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">
          <Form.Control
            size="sm"
            type="text"
            className="quangdungdev-content-editable"
            value={columnTitle}
            onClick={(e) => selectAllInlineText(e)}
            onChange={(e) => handleColumnTitleChange(e)}
            onBlur={() => handleColumnTitleBlur()}
            onKeyDown={(e) => seveContentAfterPressEnter(e)}
            onMouseDown={(e) => e.preventDefault()}
            spellCheck="false"
          />
        </div>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              size="sm"
              className="dropdown-btn"
            />

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => toggleOpenNewCardForm()}>
                Add card...
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setShowConfirmModal(!showConfirmModal)}
              >
                Remove column...
              </Dropdown.Item>
              <Dropdown.Item>
                Move all cards in this column (beta)...
              </Dropdown.Item>
              <Dropdown.Item>
                Archive all card in this column (beta)...
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>

      <div
        className={
          hiddenSidebar
            ? "card-list card-list-hidden-sidebar-true"
            : "card-list card-list-hidden-sidebar-false"
        }
      >
        <Container
          groupName="quangdungdev-columns"
          onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "card-drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
        {openNewCardForm && (
          <div className="add-new-card-area">
            <Form.Control
              size="sm"
              as="textarea"
              rows="3"
              placeholder="Enter a title for this card..."
              className="textarea-enter-new-card"
              ref={newCardTextareRef}
              value={newCardTitle}
              onChange={(e) => onNewCardTitleChange(e)}
              onKeyDown={(e) => e.key === "Enter" && addNewCard()}
            />
          </div>
        )}
      </div>
      <footer>
        {openNewCardForm && (
          <div className="add-new-card-actions">
            <Button variant="success" size="sm" onClick={() => addNewCard()}>
              Thêm thẻ
            </Button>
            <span
              className="cancel-icon"
              onClick={() => toggleOpenNewCardForm()}
            >
              <i className="fa fa-trash icon" />
            </span>
          </div>
        )}
        {!openNewCardForm && (
          <div
            className="footer-actions"
            onClick={() => toggleOpenNewCardForm()}
          >
            <i className="fa fa-plus icon" />
            Add another card
          </div>
        )}
      </footer>
      <ConfirmModal
        show={showConfirmModal}
        onAction={toggleShowConfirmModal}
        title="Remove column"
        content={`Are you sure you want to remove <strong>${column.title}</strong>. <br /> All related cards will also be remove!`}
      />
    </div>
  );
};

export default Column;
