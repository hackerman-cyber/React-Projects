import React, { useState } from "react";
import { PropTypes } from "prop-types";

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <form onSubmit={onSubmit} className="form form-group">
      <input
        type="text"
        name="text"
        className="form-control my-2 py-2"
        placeholder="Search users..."
        value={text}
        onChange={onChange}
      />
      <input
        type="submit"
        value="search"
        className="btn btn-success btn-sm btn-block"
      />
      {showClear ? (
        <button
          type="button"
          className="btn btn-primary btn-sm btn-block"
          onClick={clearUsers}
        >
          {" "}
          Clear
        </button>
      ) : null}
    </form>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
