import React from "react";
import { Typography } from "@mui/material";
import { GrayWrapper } from "../components/GrayWrapper";
import { grey } from "@mui/material/colors";

const Header = () => {
  return (
    <GrayWrapper component="header" px={2} py={1} mx="auto" mt="2px">
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 600,
        }}
        color={grey[800]}
      >
        Сокращатель
      </Typography>
    </GrayWrapper>
  );
};

export { Header };
