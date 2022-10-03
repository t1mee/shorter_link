import React, { FC } from "react";
import { Typography, Grid, Link, Chip } from "@mui/material";
import { GrayWrapper } from "./GrayWrapper";

export type UrlListItemType = {
  id: number;
  url: string;
  short_url: string;
  clicks: number;
};

export const UrlListItem: FC<UrlListItemType> = ({
  id,
  url,
  short_url,
  clicks,
}) => {
  const isEven = id % 2;
  return (
    <Grid
      container
      p={!isEven ? "12px" : "14px"}
      component={!isEven ? GrayWrapper : Grid}
      sx={{
        width: "100%",
      }}
      justifyContent="space-between"
      direction="row"
    >
      <Grid xs={5} item>
        <Grid container wrap="nowrap" direction="row" spacing={2}>
          <Grid xs={2} item>
            <Typography>{id}</Typography>
          </Grid>
          <Grid
            xs={10}
            sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
            item
          >
            <Link sx={{ fontWeight: "bold", fontSize: 18 }} href={url}>
              {url}
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ overflow: "hidden", textOverflow: "ellipsis" }} xs={5} item>
        <Link sx={{ fontWeight: "bold", fontSize: 18 }} href={short_url}>
          {short_url}
        </Link>
      </Grid>
      <Grid item>
        <Chip
          sx={{ width: 46, height: 46, borderRadius: "50%" }}
          color="primary"
          label={clicks}
        />
      </Grid>
    </Grid>
  );
};
