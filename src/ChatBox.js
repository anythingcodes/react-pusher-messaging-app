import React from "react";
import './ChatBox.css';

export default ({ text, username, handleTextChange }) => (
  <div>
    <div className="row">
    <div className="col-xs-12">
      <div className="chat">
        
        <input
          type="text"
          value={text}
          placeholder="chat here..."
          className="form-control"
          onChange={handleTextChange}
          onKeyDown={handleTextChange}
        />

        <div className="clearfix"></div>
      </div>
    </div>

    <h4 className="greetings">Ohai, {username}!</h4>
  </div>
    </div>
);
