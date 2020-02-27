import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
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
          className="form-control"
          placeholder="Search users..."
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-success btn-block"
        />
      </form>
    );
  }
}

export default Search;
