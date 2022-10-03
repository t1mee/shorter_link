import React, { FC } from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { grey } from "@mui/material/colors";

export const Button: FC<ButtonProps> = ({
  children,
  variant = "outlined",
  ...other
}) => (
  <MuiButton
    sx={{
      "&.MuiButtonBase-root": {
        "&:not(:hover)": {
          color: grey[800],
          bgcolor: grey[200],
          borderRadius: "4px",
          borderColor: grey[300],
        },
        border: `2px solid`,
        textTransform: "none",
      },
    }}
    variant={variant}
    {...other}
  >
    {children}
  </MuiButton>
);
