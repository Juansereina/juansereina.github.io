import React, { Component } from 'react';


class Notification extends Component {

  render() {
    return (
      <div>
        <button
          className="btn btn-info"
          onClick={this.createNotification('info')}
        >Info
        </button>
        <hr />
        <button
          className="btn btn-success"
          onClick={this.createNotification('success')}
        >Success
        </button>
        <hr />
        <button
          className="btn btn-warning"
          onClick={this.createNotification('warning')}
        >Warning
        </button>
        <hr />
        <button
          className="btn btn-danger"
          onClick={this.createNotification('error')}
        >Error
        </button>

        
      </div>
    );
  }
}

export default Notification;
