import React, { Component } from "react";
import "./style.css";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
    };
  }
  render() {
    let weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let time = new Date();
    let weekDay = weekDays[time.getDay() - 1];
    return (
      <div>
        <h1>To Do List</h1>
        <div className="time">
          <h3>
            <span>Date: </span>
            {this.state.day} .{this.state.month} .{this.state.year} .{weekDay}
          </h3>
        </div>
      </div>
    );
  }
}

export default Navbar;
