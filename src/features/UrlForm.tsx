import React, { useState } from "react";
import { Typography, TextField, Grid } from "@mui/material";
import { GrayWrapper } from "../components/GrayWrapper";
import { Button } from "../components/Button";
import { grey } from "@mui/material/colors";
import { FetchResult, useMutation } from "@apollo/client";
import { SHORTEN_URL } from "../query/shorten_url_list";
import { addLink } from "../historyUrlListSlice";
import { UrlListItemType } from "../components/UrlListItem";
import { useDispatch } from "react-redux";

type FetchResultType = {
  shorten_url: {
    short_url: UrlListItemType;
  };
};

const UrlForm = () => {
  const [fieldValue, setField] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setField(value);
  };

  const setHistoryStore = (
    res: FetchResult<FetchResultType, Record<string, any>, Record<string, any>>,
  ) => {
    const response = res.data?.shorten_url.short_url;
    response && dispatch(addLink(response));
  };

  const [shortenUrl] = useMutation<FetchResultType>(SHORTEN_URL);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await shortenUrl({ variables: { url: fieldValue } });
    setField("");
    setHistoryStore(res);
    console.log(res);
  };

  return (
    <GrayWrapper p={3}>
      <Grid component="form" onSubmit={handleSubmit} rowSpacing={2} container>
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
              onChange={handleChange}
              value={fieldValue}
            />
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" fullWidth>
              Сокранить
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </GrayWrapper>
  );
};

export { UrlForm };
