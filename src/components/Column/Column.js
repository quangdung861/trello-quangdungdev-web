import React, { useEffect, useRef, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { Dropdown, Form } from "react-bootstrap";

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

const Column = ({ column, onCardDrop, onUpdateColumn }) => {
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

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
              <Dropdown.Item>Add card...</Dropdown.Item>
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

      <div className="card-list">
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
      </div>
      <footer>
        <div className="footer-actions">
          <i className="fa fa-plus icon" />
          Add another card
        </div>
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
