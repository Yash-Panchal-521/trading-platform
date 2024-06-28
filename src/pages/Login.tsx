import React, { useState } from "react";
import TopNavBar from "../container/TopNavBar";
import LoginForm from "../container/LoginForm";
import AnimatedPages from "./AnimatedPages";
import { AnimatePresence } from "framer-motion";

const Login = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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
