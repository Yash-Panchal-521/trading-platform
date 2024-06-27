import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { motion } from "framer-motion";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-[35vw] pt-[10vh] flex flex-col gap-4 content-center place-content-center">
        <div className="text-purple-600 text-3xl text-bold p-4 text-center">
          Login
        </div>
        <div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email",
              },
            }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={
                  errors.email ? errors.email.message?.toString() : ""
                }
                fullWidth
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={
                  errors.password ? errors.password.message?.toString() : ""
                }
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </div>
        <div>
          <span>Don't have an account? </span>
          <Link to="/register" className="text-purple-600 underline px-2">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
