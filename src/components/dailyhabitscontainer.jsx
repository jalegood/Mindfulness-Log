import React, { Component } from "react";
import DailyHabit from "../components/dailyhabit";

class DailyHabitsContainer extends Component {
  state = {
    habits: [
      { id: 1, value: "Practice coding projects", checked: false },
      { id: 2, value: "Do leetcode problems", checked: false },
      { id: 3, value: "Eat a vegetable", checked: true },
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
            marginTop: 30,
          }}
        >
          Daily Habits
        </div>
        {this.state.habits.map((habits) => (
          <DailyHabit
            key={habits.id}
            number={habits.id}
            value={habits.value}
            checked={habits.checked}
          />
        ))}
      </div>
    );
  }
}

export default DailyHabitsContainer;
