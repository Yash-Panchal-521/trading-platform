import React from "react";
import TopNavBar from "../container/TopNavBar";
import RegisterForm from "../container/RegisterForm";
import AnimatedPages from "./AnimatedPages";
import { AnimatePresence } from "framer-motion";
const Register = () => {
  return (
    <div>
      <TopNavBar />
      <AnimatePresence>
        <AnimatedPages key="register">
          <RegisterForm />
        </AnimatedPages>
      </AnimatePresence>
    </div>
  );
};

export default Register;
