import React from "react";
import { createBrowserRouter } from "react-router-dom";
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

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/marketplace", element: <MarketPlace /> },
  { path: "/trade", element: <Trades /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/settings", element: <Settings /> },
  { path: "/help", element: <Help /> },
  { path: "*", element: <NotFound /> },
]);
