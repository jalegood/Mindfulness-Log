import React, { Component } from "react";
import Goal from "../components/goal";

class GoalsContainer extends Component {
  state = {
    goals: [
      { id: 1, value: "Start learning React", checked: true },
      { id: 2, value: "Get a job as a developer", checked: false },
      { id: 3, value: "Profit", checked: false },
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
          }}
        >
          Goals
        </div>
        {this.state.goals.map((goal) => (
          <Goal
            key={goal.id}
            number={goal.id}
            value={goal.value}
            checked={goal.checked}
          />
        ))}
      </div>
    );
  }
}

export default GoalsContainer;
