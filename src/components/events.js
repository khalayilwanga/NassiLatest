import "../styles/css/events.css";
import React, { Component } from "react";

export default class Events extends Component {
  render() {
    return (
      <div className="events">
        <div className="main_events">
          <div className="recent--events_events events__item">
            <h3 className="events--title">Recent Events</h3>
            <p>There are no recent events</p>
          </div>
          <div className="upcoming--events_events events__item">
            <h3 className="events--title">Upcoming Events</h3>
            <p>There are no upcoming events</p>
          </div>
        </div>
      </div>
    );
  }
}
