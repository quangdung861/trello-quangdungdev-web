import React, { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";

import { SlArrowRight, SlArrowLeft, SlArrowDown } from "react-icons/sl";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { AiOutlineClose } from "react-icons/ai";
import "./BoardSaved.scss";

const BoardSaved = () => {
  const [isTickStar, setIsTickStar] = useState(false);
  const [showBoardSaved, setShowBoardSaved] = useState("");
  const [showDropdownBoardSavedTitle, setShowDropdownBoardSavedTitle] =
    useState(false);

  return (
    <div className="board-saved">
      {showDropdownBoardSavedTitle && (
        <div
          className="pseudo-overlay"
          onClick={() => {
            setShowDropdownBoardSavedTitle(!showDropdownBoardSavedTitle);
            setShowBoardSaved("");
          }}
        ></div>
      )}
      <div
        className="button-board-saved"
        style={
          showDropdownBoardSavedTitle
            ? { backgroundColor: "rgba(255, 255, 255, 0.3)" }
            : {}
        }
        onClick={() =>
          setShowDropdownBoardSavedTitle(!showDropdownBoardSavedTitle)
        }
      >
        Thêm
        <VscChevronDown style={{ fontSize: "18px", marginLeft: "3px" }} />
      </div>
      {showDropdownBoardSavedTitle && (
        <div className="dropdown-board-saved">
          {showBoardSaved === "tick-star" ? (
            <div className="board-stick-star">
              <div className="stick-star-header">
                <div>
                  <SlArrowLeft
                    className="stick-star-header-back-icon"
                    onClick={() => setShowBoardSaved("")}
                  />
                </div>
                <div>Bảng Đánh Dấu Sao</div>
                <div>
                  <AiOutlineClose
                    className="stick-star-header-close-icon"
                    onClick={() => {
                      setShowBoardSaved("");
                      setShowDropdownBoardSavedTitle(
                        !showDropdownBoardSavedTitle
                      );
                    }}
                  />
                </div>
              </div>
              <div className="stick-star-item">
                <div className="dropown-stick-star-item">
                  <img
                    src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"
                    alt=""
                  />

                  <div className="dropdown-stick-star-box">
                    <div className="dropdown-stick-star-content">
                      <div className="dropdown-stick-star-title">
                        Trello Clone App
                      </div>
                      <div className="dropdown-stick-star-description">
                        không gian làm việc Trello
                      </div>
                    </div>
                    {isTickStar ? (
                      <div className="icon-tick-star">
                        <AiOutlineStar
                          onClick={() => setIsTickStar(!isTickStar)}
                        />
                      </div>
                    ) : (
                      <div className="icon-tick-star-block">
                        <AiFillStar
                          onClick={() => setIsTickStar(!isTickStar)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="dropown-stick-star-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG"
                    alt=""
                  />

                  <div className="dropdown-stick-star-box">
                    <div className="dropdown-stick-star-content">
                      <div className="dropdown-stick-star-title">
                        Bảng không có tiêu đề
                      </div>
                      <div className="dropdown-stick-star-description">
                        không gian làm việc Trello
                      </div>
                    </div>
                    {isTickStar ? (
                      <div className="icon-tick-star">
                        <AiOutlineStar
                          onClick={() => setIsTickStar(!isTickStar)}
                        />
                      </div>
                    ) : (
                      <div className="icon-tick-star-block">
                        <AiFillStar
                          onClick={() => setIsTickStar(!isTickStar)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : showBoardSaved === "sample" ? (
            <div className="board-sample">
              <div className="board-sample-header">
                <div>
                  <SlArrowLeft
                    className="board-sample-header-back-icon"
                    onClick={() => setShowBoardSaved("")}
                  />
                </div>
                <div>Mẫu</div>
                <div>
                  <AiOutlineClose
                    className="board-sample-header-close-icon"
                    onClick={() => {
                      setShowBoardSaved("");
                      setShowDropdownBoardSavedTitle(
                        !showDropdownBoardSavedTitle
                      );
                    }}
                  />
                </div>
              </div>
              <div className="top-sample-list">
                <div className="top-sample-list-title">
                  <div>Các mẫu hàng đầu</div>
                  <div className="top-sample-list-title-icon">
                    <SlArrowDown />
                  </div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                  />
                  <div className="top-sample-item-title">
                    Agile Board Template | Trello
                  </div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">Company Overview</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/96406688eb291c869064290cfb9b0c80/shutterstock_134707556.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">1-on-1 Meeting Agenda</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/4315f9a5b3c78f696d170e9b626a44d6/e2d2752f.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">Design Huddle</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/5755843411a2cd8c83067c03/480x320/cf2d1e29e8e3a4857a5f58f500fb464c/ian-dooley-407846-unsplash.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">Go To Market Strategy Template</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">Kanban Template</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/963ddbe30ac0e2ab51ed5ed7403a5143/photo-1523266092241-0077129f31fe.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">Mise-En-Place Personal Productivity System</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">Project Management</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1849a4a0cc47bd7f5c6e08a06cf3affa/photo-1516553174826-d05833723cd4.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">Remote Team Meetings</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x270/efea59b89ada0934c5256715fb180bd9/photo-1463107971871-fbac9ddb920f.jpg"
                    alt=""
                  />
                  <div className="top-sample-item-title">Simple Project Board</div>
                </div>
                <div className="top-sample-item">
                  <img
                    src="https://trello-backgrounds.s3.amazonaws.com/575584dacedaafdf0d8660c2/480x272/02a67bbc2d5b879d912dad85eb5f3a05/asset_3.png"
                    alt=""
                  />
                  <div className="top-sample-item-title">Teaching: Weekly Planning</div>
                </div>
              </div>
              <div className="board-sample-footer">
                <div className="board-sample-footer-top">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6124/6124991.png"
                    alt=""
                  />
                  <div>Xem hàng trăm mẫu từ cộng đồng Trello</div>
                </div>
                <div className="board-sample-footer-bottom">
                  <button className="btn btn-survey">Khám phá các mẫu</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div
                className="dropdown-board-saved-item"
                onClick={() => setShowBoardSaved("tick-star")}
              >
                <div className="dropdown-board-saved-title">
                  Bảng Đánh Dấu Sao
                </div>
                <SlArrowRight
                  className="icon-arrow"
                  title="Bảng đánh dấu sao"
                />
              </div>
              <div
                className="dropdown-board-saved-item"
                onClick={() => setShowBoardSaved("sample")}
              >
                <div className="dropdown-board-saved-title">Mẫu</div>
                <SlArrowRight className="icon-arrow" title="Mẫu" />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BoardSaved;
