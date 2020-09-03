import React, { Component } from "react";

// MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  Card: {
    margin: 10,
    height: 80,
    backgroundColor: "#fbe9e7",
  },
  cardItems: {
    display: "flex",
  },
};

const handleChange = (event) => {
  console.log("You checked a box! Great job :)");
};

class DailyHabit extends Component {
  state = {
    value: this.props.value,
  };
  render() {
    return (
      <div>
        <Card style={styles.Card}>
          <CardContent>
            <div style={styles.cardItems}>
              <TextField
                label={this.props.number}
                variant="standard"
                fullWidth={true}
                defaultValue={this.props.value}
              />
              <Checkbox
                checked={this.props.checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default DailyHabit;
