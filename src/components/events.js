import "../styles/final/events.css";
import React, { Component } from "react";
import EventSlider from "../layouts/flickity_slider";

const frontImages = [
  "party/Dec2019Party1.jpg",
  "party/Dec2019Party2.jpg",
  "party/Dec2019Party3.jpg",
  "party/Dec2019Party4.jpg",
  "party/Dec2019Party5.jpg",
  "party/Dec2019Party6.jpg",
  "party/Dec2019Party7.jpg",
  "party/Dec2019Party8.jpg",
  "party/Dec2019Party9.jpg",
  "party/Dec2019Party10.jpg",
  "party/Dec2019Party11.jpg"
];
export default class Events extends Component {
  render() {
    return (
      <div className="events" style={{ marginBottom: "200px" }}>
        <div className="main_events" id="events_top">
          <div className="recent--events_events events__item">
            <h3 className="events--title">Recent Events</h3>

            <EventSlider eventImages={frontImages} />
            <div
              style={{
                width: "auto",
                // margin: "10px",
                marginLeft: 0
              }}
            >
              Nassi staff and directors at the End Of Year Party in December
              2019
            </div>
          </div>
          <div className="upcoming--events_events events__item">
            <h3 className="events--title">Upcoming Events</h3>
            <p> There are no upcoming events</p>
          </div>
        </div>
      </div>
    );
  }
}
