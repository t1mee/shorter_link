import React from "react";
import { Typography, TextField, Grid } from "@mui/material";
import { GrayWrapper } from "../components/GrayWrapper";
import { Button } from "../components/Button";
import { grey } from "@mui/material/colors";

const UrlForm = () => {
  return (
    <GrayWrapper p={3}>
      <Grid rowSpacing={2} container>
        <Grid item>
          <Typography color={grey[800]}>Введите ссылку</Typography>
        </Grid>
        <Grid columnSpacing={3} direction="row" container item>
          <Grid item xs={8}>
            <TextField
              fullWidth
              size="small"
              label="url"
              sx={{ bgcolor: "#fff" }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <Button fullWidth>Сокранить</Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography color="error">ошибка</Typography>
        </Grid>
      </Grid>
    </GrayWrapper>
  );
};

export { UrlForm };
