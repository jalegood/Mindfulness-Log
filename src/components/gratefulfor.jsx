import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

const styles = {
  backgroundColor: "#f1f8e9",
};

class GratefulFor extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          What am I grateful for, and why do I value it?
        </div>
        <TextField
          style={styles}
          id="outlined-multiline-static"
          multiline
          rows={4}
          fullWidth={true}
          variant="outlined"
        />
      </div>
    );
  }
}

export default GratefulFor;
