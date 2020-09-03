import React, { Component } from "react";

// MUI
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

const styles = {
  Card: {
    margin: 10,
    height: 47,
    backgroundColor: "#e0f2f1",
  },
  cardItems: {
    display: "flex",
  },
};

class Todo extends Component {
  state = {};
  render() {
    return (
      <div>
        <Card style={styles.Card}>
          <CardContent>
            <div style={styles.cardItems}>
              <ArrowRightIcon />
              <TextField
                variant="standard"
                fullWidth={true}
                defaultValue={this.props.value}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Todo;
