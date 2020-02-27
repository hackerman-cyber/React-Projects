import React, { Component } from "react";

class Alert extends Component {
  render() {
    console.log(this.props.alertInfo.msg);
    return (
      <div>
        {this.props.alertInfo.val ? (
          <div className="alert alert-danger" role="alert">
            {this.props.alertInfo.msg} !
          </div>
        ) : null}
      </div>
    );
  }
}

export default Alert;
