import { Typography } from "@mui/material";
import React, { FC } from "react";

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { lightGreen, red } from "@mui/material/colors";

interface SetPasswordHelperProps {
  password: string | undefined;
  passwordValidation: (boolean | undefined)[];
}

const SetPasswordHelper: FC<SetPasswordHelperProps> = ({
  password,
  passwordValidation,
}) => {
  const helperText = [
    "At least 8 characters",
    "A number",
    "A lowercase",
    "An uppercase",
    "A special character",
  ];

  const isPasswordDefined = password !== undefined;

  return (
    isPasswordDefined && (
      <div
        className={`flex flex-col overflow-hidden transition-all duration-500  ${
          isPasswordDefined ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {passwordValidation.map((passwordValidator, index) => {
          return (
            <div className="flex py-0.25">
              <span className="px-2">
                {passwordValidator === undefined ? (
                  <CircleOutlinedIcon sx={{ fontSize: 19 }} />
                ) : passwordValidator ? (
                  <CheckCircleIcon
                    sx={{ fontSize: 19, color: lightGreen[500] }}
                  />
                ) : (
                  <CancelIcon sx={{ fontSize: 19, color: red[500] }} />
                )}
              </span>
              <span>
                <Typography>{helperText[index]}</Typography>
              </span>
            </div>
          );
        })}
      </div>
    )
  );
};

export default SetPasswordHelper;
