// components/Features.js
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import HttpsIcon from "@mui/icons-material/Https";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

const features = [
  {
    title: "Real-Time Data",
    description:
      "Get the latest market data in real-time with our advanced charting tools.",
    icon: DynamicFeedIcon,
  },
  {
    title: "Advanced Analytics",
    description:
      "Utilize our comprehensive analytics tools to make informed trading decisions.",
    icon: AnalyticsIcon,
  },
  {
    title: "Secure Transactions",
    description:
      "Your security is our priority. Trade with confidence knowing your data is safe.",
    icon: HttpsIcon,
  },
  {
    title: "24/7 Support",
    description:
      "Our team is available around the clock to assist you with any questions or concerns. ",
    icon: HelpCenterIcon,
  },
];

const Features = () => (
  <div className="flex flex-col h-[100vh] items-center justify-center py-8 ">
    <Typography
      variant="h4"
      component="h2"
      gutterBottom
      textAlign="center"
      className="pb-10"
    >
      Key Features
    </Typography>
    <Grid container spacing={24} className="self-center px-[20vw]">
      {features.map((feature, index) => (
        <Grid item xs={12} md={6} key={index}>
          <div>
            <Box textAlign="center">
              {feature.icon && <feature.icon fontSize="large" />}
              <Typography variant="h6" component="h3" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1" component="p">
                {feature.description}
              </Typography>
            </Box>
          </div>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Features;
