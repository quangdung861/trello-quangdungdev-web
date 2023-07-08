import React from "react";
import { Form } from "react-bootstrap";
import { VscChevronDown } from "react-icons/vsc";
import { AiOutlineLink } from "react-icons/ai";

import "./ModalShareBoard.scss";
const ModalShareBoard = () => {
  return (
    <div className="modal fade" id="myModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header-customs">
            <div className="header-title">Chia sẻ bảng</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body-customs">
            <div className="modal-body-actions">
              <Form.Control
                size="sm"
                type="text"
                // value={columnTitle}
                // onClick={(e) => selectAllInlineText(e)}
                // onChange={(e) => handleColumnTitleChange(e)}
                // onBlur={() => handleColumnTitleBlur()}
                // onKeyDown={(e) => seveContentAfterPressEnter(e)}
                // onMouseDown={(e) => e.preventDefault()}
                spellCheck="false"
                placeholder="Địa chỉ email hoặc tên"
                className="form-user"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 10px",
                  flexShrink: 0,
                  fontWeight: "bold",
                  height: "40px",
                }}
                className="member-list"
              >
                <div>Thành viên</div>
                <VscChevronDown />
              </div>
              <div
                style={{
                  padding: "2px 12px",
                  color: "white",
                  height: "40px",
                  textAlign: "center",
                }}
                className="share-board"
              >
                Chia sẻ
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: "32px",
                  width: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#EBECF0",
                  borderRadius: "3px",
                  marginRight: "10px",
                }}
              >
                <AiOutlineLink />
              </div>
              <div style={{ cursor: "text" }}>
                <div>Chia sẻ bảng này bằng liên kết</div>
                <div
                  style={{
                    textDecoration: "underline",
                    fontSize: "12px",
                    color: "##5e6c84",
                    cursor: "pointer",
                  }}
                >
                  Tạo liên kết
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <div className="account">
                <div className="avatar"> PD </div>
              </div>
              <div style={{ flex: 1, cursor: "text" }}>
                <div>Phan Quang Dũng (bạn)</div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "##5e6c84",
                  }}
                >
                  @quangdung861 * Quản trị viên Không gian làm việc
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 10px",
                  flexShrink: 0,
                  fontWeight: "bold",
                  height: "40px",
                  marginRight: "10px",
                }}
                className="position-board"
              >
                <div style={{ marginRight: "10px" }}>Quản trị viên</div>
                <VscChevronDown />
              </div>
            </div>
          </div>
          <div className="modal-footer-customs"></div>
          {/* <div className="modal-header">
            <h4 className="modal-title">Modal Heading</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">Modal body..</div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ModalShareBoard;
