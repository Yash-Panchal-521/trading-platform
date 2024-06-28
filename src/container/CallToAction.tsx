import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center py-8">
      <Container>
        <div>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Start Trading?
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Join thousands of traders who trust our platform.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            <Link to="register">Sign Up Now</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
