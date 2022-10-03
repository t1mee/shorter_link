import React, { useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { Header } from "./features/Header";
import { UrlForm } from "./features/UrlForm";
import { GeneralList } from "./features/GeneralList";
import { useQuery } from "@apollo/client";
import { GET_PAGINATION_INFO } from "./query/get_pagination_info";
import { GET_SHORT_URL_LIST } from "./query/get_short_url_list";
import type { RootState } from "./store";
import { useSelector } from "react-redux";
import { UrlList } from "./features/UrlList";

function App() {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery(GET_SHORT_URL_LIST, {
    variables: { page },
  });
  const { data: paginationReq } = useQuery(GET_PAGINATION_INFO);
  const { list } = useSelector((state: RootState) => state.list);

  return (
    <div className="App">
      <Header />
      <Box mx="auto" p={3} sx={{ maxWidth: "1200px", boxSizing: "border-box" }}>
        <Grid container columnSpacing={10}>
          <Grid item lg={5}>
            <UrlForm />
            <UrlList title="Мои ссылки" urlList={list} />
          </Grid>
          <Grid
            sx={{
              minHeight: "50vh",
              position: "relative",
            }}
            justifyContent="center"
            alignItems="center"
            item
            container
            lg={7}
          >
            {loading && <CircularProgress sx={{ position: "absolute" }} />}
            {data && (
              <GeneralList
                setPage={setPage}
                urlListProp={data}
                paginationReq={paginationReq}
                currentPage={page}
                error={error}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
