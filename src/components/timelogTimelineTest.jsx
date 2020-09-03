import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  timelineDiv: {
    marginLeft: 0,
    marginRight: "auto",
    textAlign: "center",
  },
};

class TimeLog extends Component {
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
          Time Log
        </div>
        <div>
          <Timeline>
            <TimelineItem style={styles.timelineDiv}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  05:00am
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography component="h1">Eat</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={styles.timelineDiv}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  10:00am
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary"></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography component="h1">Code</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={styles.timelineDiv}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  11:00 am
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined"></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography component="h1">Sleep</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={styles.timelineDiv}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  12:00 pm
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary"></TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography component="h1">Repeat</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    );
  }
}

export default TimeLog;
