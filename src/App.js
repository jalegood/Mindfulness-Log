import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// Components
import GoalsContainer from "./components/goalscontainer";
import DailyHabitsContainer from "./components/dailyhabitscontainer";
import TodoContainer from "./components/todocontainer";
import CouldHaveGoneBetter from "./components/couldhavegonebetter";
import GratefulFor from "./components/gratefulfor";
import TimeLog from "./components/timelog";

const styles = {
  Card: {
    padding: 20,
    margin: 2,
    marginBottom: 10,
    height: "100%",
  },
  RightCard: {
    backgroundColor: "#fffff7",
    padding: 20,
    margin: 2,
    marginBottom: 10,
    height: "100%",
  },
};

function App() {
  return (
    <div className="App" bg="light">
      <NavBar />
      <Grid container alignItems="stretch">
        {/* Left pane */}
        <Grid item sm>
          <Card style={styles.Card}>
            <GoalsContainer />
            <DailyHabitsContainer />
          </Card>
        </Grid>

        {/* Center pane */}
        <Grid item sm={6}>
          <Card style={styles.Card}>
            <TodoContainer />
            <CouldHaveGoneBetter />
            <GratefulFor />
          </Card>
        </Grid>

        {/* Right pane */}
        <Grid item sm>
          <Card style={styles.RightCard}>
            <TimeLog />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
