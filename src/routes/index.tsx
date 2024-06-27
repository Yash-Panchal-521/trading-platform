import React, { useEffect, useState } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MarketPlace from "../pages/MarketPlace";
import Trades from "../pages/Trades";
import Portfolio from "../pages/Portfolio";
import Settings from "../pages/Settings";
import Help from "../pages/Help";
import NotFound from "../pages/NotFound";
import { Alert, Button, Modal, Snackbar, SnackbarProps } from "@mui/material";
import { Opacity, WarningOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";

const ProtectedRoute = ({ children }) => {
  // Replace the condition with actual condition to check if the user is authenticated
  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/marketplace",
    element: (
      <ProtectedRoute>
        <MarketPlace />
      </ProtectedRoute>
    ),
  },
  {
    path: "/trade",
    element: (
      <ProtectedRoute>
        <Trades />
      </ProtectedRoute>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <ProtectedRoute>
        <Portfolio />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    ),
  },
  {
    path: "/help",
    element: (
      <ProtectedRoute>
        <Help />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
