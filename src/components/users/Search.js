import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form form-group">
        <input
          type="text"
          name="text"
          className="form-control my-2 py-2"
          placeholder="Search users..."
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-success btn-sm btn-block"
        />
        {this.props.showClear ? (
          <button
            type="button"
            className="btn btn-primary btn-sm btn-block"
            onClick={this.props.clearUsers}
          >
            {" "}
            Clear
          </button>
        ) : null}
      </form>
    );
  }
}

export default Search;
