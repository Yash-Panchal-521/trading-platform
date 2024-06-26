import {
  TextField,
  Button,
  Typography,
  Icon,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { lightGreen, red } from "@mui/material/colors";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegisterPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
    watch,
  } = useForm();

  console.log(watch("password"));

  const onSubmit = (data) => {
    console.log(data);
  };

  const [passwordvalidation, setPasswordValidation] = useState<
    (boolean | undefined)[]
  >([undefined, undefined, undefined, undefined, undefined]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-[35vw] pt-[10vh] flex flex-col gap-4 content-center place-content-center">
          <div className="text-purple-600 text-3xl text-bold p-4 text-center">
            Register
          </div>
          <div className="flex gap-4">
            <Controller
              name={"firstName"}
              control={control}
              rules={{
                required: "First name is required",
                maxLength: {
                  value: 15,
                  message: "The first name can not be more than 15 characters",
                },
                minLength: {
                  value: 2,
                  message: "The first name can not be less than 2 characters",
                },
              }}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  variant="outlined"
                  error={!!errors.firstName}
                  helperText={
                    errors.firstName ? String(errors.firstName.message) : ""
                  }
                  fullWidth
                />
              )}
            />
            <Controller
              name={"lastName"}
              rules={{
                required: "Last name is required",
                maxLength: {
                  value: 15,
                  message: "The last name can not be more than 15 characters",
                },
                minLength: {
                  value: 2,
                  message: "The last name can not be less than 2 characters",
                },
              }}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.lastName}
                  helperText={
                    errors.lastName ? String(errors.lastName.message) : ""
                  }
                />
              )}
            />
          </div>
          <div>
            <Controller
              name={"email"}
              rules={{
                required: "Email is required",
                pattern: {
                  value: RegExp(
                    "^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                  ),
                  message: "Enter a valid email",
                },
              }}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email ? String(errors.email.message) : ""}
                  fullWidth
                />
              )}
            />
          </div>
          <div>
            <Controller
              name={"password"}
              rules={{
                required: "Password is required",
                validate: (value) => {
                  const validationArray = [
                    value.length >= 8,
                    /\d/.test(value),
                    /[a-z]/.test(value),
                    /[A-Z]/.test(value),
                    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value),
                  ];
                  return validationArray.every((v) => v)
                    ? true
                    : "Password is not matching the criteria";
                },
              }}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={
                    errors.password ? String(errors.password.message) : ""
                  }
                  onChange={(e) => {
                    const value = e.target.value ?? "";
                    field.onChange(value);
                    const newArray = [
                      value.length >= 8,
                      /\d/.test(value),
                      /[a-z]/.test(value),
                      /[A-Z]/.test(value),
                      /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value),
                    ];
                    setPasswordValidation(newArray);
                  }}
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
          <div
            className={`flex flex-col overflow-hidden transition-all duration-500 ${
              watch("password") !== undefined
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {watch("password") !== undefined ? (
              <>
                <div className="flex">
                  <span className="px-2">
                    {passwordvalidation[0] === undefined ? (
                      <CircleOutlinedIcon sx={{ fontSize: 19 }} />
                    ) : passwordvalidation[0] ? (
                      <CheckCircleIcon
                        sx={{ fontSize: 19, color: lightGreen[500] }}
                      />
                    ) : (
                      <CancelIcon sx={{ fontSize: 19, color: red[500] }} />
                    )}
                  </span>
                  <span>
                    <Typography>At least 8 characters</Typography>
                  </span>
                </div>
                <div className="flex">
                  <span className="px-2">
                    {passwordvalidation[1] === undefined ? (
                      <CircleOutlinedIcon sx={{ fontSize: 19 }} />
                    ) : passwordvalidation[1] ? (
                      <CheckCircleIcon
                        sx={{ fontSize: 19, color: lightGreen[500] }}
                      />
                    ) : (
                      <CancelIcon sx={{ fontSize: 19, color: red[500] }} />
                    )}
                  </span>
                  <span>
                    <Typography>A number</Typography>
                  </span>
                </div>
                <div className="flex">
                  <span className="px-2">
                    {passwordvalidation[2] === undefined ? (
                      <CircleOutlinedIcon sx={{ fontSize: 19 }} />
                    ) : passwordvalidation[2] ? (
                      <CheckCircleIcon
                        sx={{ fontSize: 19, color: lightGreen[500] }}
                      />
                    ) : (
                      <CancelIcon sx={{ fontSize: 19, color: red[500] }} />
                    )}
                  </span>
                  <span>
                    <Typography className="text-grey-400">
                      A lowercase letter
                    </Typography>
                  </span>
                </div>
                <div className="flex">
                  <span className="px-2">
                    {passwordvalidation[3] === undefined ? (
                      <CircleOutlinedIcon sx={{ fontSize: 19 }} />
                    ) : passwordvalidation[3] ? (
                      <CheckCircleIcon
                        sx={{ fontSize: 19, color: lightGreen[500] }}
                      />
                    ) : (
                      <CancelIcon sx={{ fontSize: 19, color: red[500] }} />
                    )}
                  </span>
                  <span>
                    <Typography>An uppercase letter</Typography>
                  </span>
                </div>
                <div className="flex">
                  <span className="px-2">
                    {passwordvalidation[4] === undefined ? (
                      <CircleOutlinedIcon sx={{ fontSize: 19 }} />
                    ) : passwordvalidation[4] ? (
                      <CheckCircleIcon
                        sx={{ fontSize: 19, color: lightGreen[500] }}
                      />
                    ) : (
                      <CancelIcon sx={{ fontSize: 19, color: red[500] }} />
                    )}
                  </span>
                  <span>
                    <Typography>A special character</Typography>
                  </span>
                  <span></span>
                </div>
              </>
            ) : (
              <div> </div>
            )}
          </div>
          <div>
            <Controller
              name={"confirmPassword"}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === "" || value === watch("password")
                    ? true
                    : "The passwords do not match",
              }}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  variant="outlined"
                  type={showConfirmPassword ? "text" : "password"}
                  error={!!errors.confirmPassword}
                  helperText={
                    errors.confirmPassword
                      ? String(errors.confirmPassword.message)
                      : ""
                  }
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <div className="flex justify-center items-center align-middle">
            <span>
              <Typography>Have an Account? </Typography>
            </span>
            <span>
              <Link
                to="/login"
                className="text-purple-600 underline px-2 text-[1.125rem]"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
