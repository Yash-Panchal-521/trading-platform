import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const CallToAction = () => (
  <div className="flex flex-col h-[100vh] items-center justify-center">
    <Container>
      <div>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Start Trading?
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Join thousands of traders who trust our platform.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Sign Up Now
        </Button>
      </div>
    </Container>
  </div>
);

export default CallToAction;
