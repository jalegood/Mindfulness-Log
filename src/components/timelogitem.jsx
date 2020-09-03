import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

const styles = {
  Card: {
    margin: 6,
    height: 35,
  },
  cardItems: {
    display: "flex",
  },
};

class TimelogItem extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={styles.cardItems}>
          <TextField
            style={styles.Card}
            label={this.props.time}
            variant="outlined"
            fullWidth={true}
            defaultValue={this.props.value}
            margin="dense"
          />
        </div>
      </div>
    );
  }
}

export default TimelogItem;
