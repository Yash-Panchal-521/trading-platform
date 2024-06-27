import React from "react";
import TopNavBar from "../container/TopNavBar";
import LoginForm from "../container/LoginForm";
import AnimatedPages from "./AnimatedPages";
import { AnimatePresence } from "framer-motion";

const Login = () => {
  return (
    <div>
      <TopNavBar />
      <AnimatePresence>
        <AnimatedPages key="login">
          <LoginForm />
        </AnimatedPages>
      </AnimatePresence>
    </div>
  );
};

export default Login;
