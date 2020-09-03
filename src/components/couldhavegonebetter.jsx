import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

const styles = {
  backgroundColor: "#f1f8e9",
};

class CouldHaveGoneBetter extends Component {
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
          What could have gone better today? What could I try for the rest of
          the week?
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

export default CouldHaveGoneBetter;
