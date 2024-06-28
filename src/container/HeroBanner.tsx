import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="flex flex-row fit-content h-[100vh] py-8">
      <div className="basis-1/2"></div>
      <div className="basis-1/2 flex flex-col justify-center align-middle px-24">
        <Typography variant="h3" component="h1" gutterBottom>
          Trade Smarter, Not Harder
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Discover the most powerful trading platform designed for both
          beginners and pros.
        </Typography>
      </div>
    </div>
  );
};

export default HeroBanner;
