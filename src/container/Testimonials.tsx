// components/Testimonials.js
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const testimonials = [
  {
    quote:
      "This platform has revolutionized the way I trade. The real-time data and analytics tools are top-notch.",
    name: "John Doe",
    title: "Professional Trader",
  },
  {
    quote:
      "I feel confident knowing my transactions are secure. Highly recommended!",
    name: "Jane Smith",
    title: "New Trader",
  },
  {
    quote:
      "The 24/7 support team is amazing. They are always available to help me with any questions I have.",
    name: "James Johnson",
    title: "Experienced Trader",
  },
  {
    quote:
      "The platform is user-friendly and intuitive. I was able to start trading right away.",
    name: "Sarah Williams",
    title: "Beginner Trader",
  },
];

const Testimonials = () => (
  <div className="flex flex-col h-[100vh] justify-center content-center px-[25%]">
    <Typography variant="h4" component="h2" gutterBottom textAlign="center">
      What Our Users Say
    </Typography>
    <Grid container spacing={4}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} md={6} key={index}>
          <div>
            <Box
              p={3}
              border={1}
              borderColor="#ddd"
              borderRadius={4}
              textAlign="center"
            >
              <Typography variant="body1" component="p" gutterBottom>
                "{testimonial.quote}"
              </Typography>
              <Typography variant="h6" component="p">
                - {testimonial.name}, {testimonial.title}
              </Typography>
            </Box>
          </div>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Testimonials;
