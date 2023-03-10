import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

import "./Question.scss";
const Question = () => {
  return (
    <div className="question">
      <BsQuestionCircle style={{ fontSize: "18px" }} />
    </div>
  );
};

export default Question;
