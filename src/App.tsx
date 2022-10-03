import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Header } from "./features/Header";
import { UrlForm } from "./features/UrlForm";
import { GeneralList } from "./features/GeneralList";
import { useQuery } from "@apollo/client";
import { usePagination } from "./hooks/usePagination";
import { GET_PAGINATION_INFO } from "./query/get_pagination_info";

function App() {
  const [page, setPage] = useState<number>(1);
  const GET_SHORT_URL_LIST = usePagination(page);
  const { loading, error, data } = useQuery(GET_SHORT_URL_LIST);
  const { data: paginationReq } = useQuery(GET_PAGINATION_INFO);

  return (
    <div className="App">
      <Header />
      <Box mx="auto" p={3} sx={{ maxWidth: "1200px", boxSizing: "border-box" }}>
        <Grid container columnSpacing={10}>
          <Grid item xs={5}>
            <UrlForm />
          </Grid>
          <Grid item xs={7}>
            {data && (
              <GeneralList
                setPage={setPage}
                urlListProp={data}
                paginationReq={paginationReq}
                currentPage={page}
                loading={loading}
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
