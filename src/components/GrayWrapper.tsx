import React, { FC } from "react";
import { Box, BoxProps } from "@mui/material";
import { grey } from "@mui/material/colors";

const GrayWrapper: FC<BoxProps> = ({ children, ...other }) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        bgcolor: grey[200],
        borderRadius: "4px",
        border: `2px solid ${grey[300]}`,
        maxWidth: "1200px",
      }}
      {...other}
    >
      {children}
    </Box>
  );
};

export { GrayWrapper };
