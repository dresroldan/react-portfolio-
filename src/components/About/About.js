import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import Avatar from "../Avatar/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    paddingTop: "150px",
    paddingBottom: "150px",
  },

  avatar: {
    justifyContent: "center",
    marginBottom: "30px",
    paddingRight: "30px",
  },

  button: {
    padding: "8px 22px",
    color: "white",
    backgroundColor: "black",
    borderRadius: "5px",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Fade duration={2500} bottom>
      <div id="hellow">
        <Grid container className={classes.aboutContent} id="about">
          <Grid item xs={12} md={5}>
            <Avatar className={classes.avatar} />
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography component="h2" variant="h6" gutterBottom>
              <Box fontStyle="oblique" fontWeight={500} textAlign="left" m={1}>
                About Me
              </Box>
            </Typography>

            <Typography variant="h7" paragraph>
              <Box textAlign="left" m={1}>
                Creative and dependable front-end web developer with an
                outstanding customer service record, and superb work ethic. Fast
                learner, hard worker, and team player who is proficient in an
                array of scripting languages and multimedia web tools.
              </Box>
            </Typography>

            <Typography variant="h6" gutterBottom>
              <Box fontStyle="oblique" fontWeight={500} textAlign="left" m={1}>
                Contact
              </Box>
            </Typography>

            <Typography variant="h8" gutterBottom>
              <Box textAlign="left" m={1}>
                Andrés Roldán
              </Box>
              <Box textAlign="left" m={1}>
                Chicago, IL
              </Box>
              <Box textAlign="left" m={1}>
                779.207.8144
              </Box>
              <Box textAlign="left" m={1}>
                dresroldan@gmail.com
              </Box>
            </Typography>

            <Box mt={4} ml={1}>
              <a
                href="https://drive.google.com/file/d/1uWGIeu_o2xWPSQHOJcNfhrtt3uzjUwqm/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={classes.button}
                  size="large"
                  variant="contained"
                >
                  Resume
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
}
