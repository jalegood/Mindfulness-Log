import React, { Component } from "react";
import TimelogItem from "./timelogitem";

class TimeLog extends Component {
  state = {
    hours: [
      { id: 1, time: "5:00 am", value: "Make coffee" },
      { id: 2, time: "6:00 am", value: "" },
      { id: 3, time: "7:00 am", value: "" },
      { id: 4, time: "8:00 am", value: "" },
      { id: 5, time: "9:00 am", value: "" },
      { id: 6, time: "10:00 am", value: "" },
      { id: 7, time: "11:00 am", value: "" },
      { id: 8, time: "12:00 am", value: "" },
      { id: 9, time: "1:00 pm", value: "" },
      { id: 10, time: "2:00 pm", value: "" },
      { id: 11, time: "3:00 pm", value: "" },
      { id: 12, time: "4:00 pm", value: "" },
      { id: 13, time: "5:00 pm", value: "" },
      { id: 14, time: "6:00 pm", value: "" },
      { id: 15, time: "7:00 pm", value: "" },
      { id: 16, time: "8:00 pm", value: "" },
      { id: 17, time: "9:00 pm", value: "" },
      { id: 18, time: "10:00 pm", value: "Bed time" },
    ],
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Time Log
        </div>

        {this.state.hours.map((hour) => (
          <TimelogItem id={hour.id} time={hour.time} value={hour.value} />
        ))}
      </div>
    );
  }
}

export default TimeLog;
