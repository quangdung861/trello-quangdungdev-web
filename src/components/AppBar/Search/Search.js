import React, { useState } from "react";
import { Form } from "react-bootstrap";

import "./Search.scss";

const Search = ({ showBoxSearch, setShowBoxSearch }) => {
  return (
    <>
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <Form.Control
          size="sm"
          type="text"
          placeholder="Tìm kiếm"
          className="form-control"
          onClick={() => setShowBoxSearch(!showBoxSearch)}
        />
      </div>

      <div className="form-group has-search-mobile">
        <span className="fa fa-search"></span>
      </div>
    </>
  );
};

export default Search;
