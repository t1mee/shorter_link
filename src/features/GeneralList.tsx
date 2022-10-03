import React, { FC } from "react";
import { UrlList } from "./UrlList";
import { Pagination } from "@mui/material";

import { ApolloError } from "@apollo/client";
import { UrlListItemType } from "../components/UrlListItem";

type GeneralListProps = {
  urlListProp: { short_urls: { data: UrlListItemType[] } };
  setPage: (page: number) => void;
  paginationReq:
    | {
        short_urls: {
          paginatorInfo: { lastPage: number; currentPage: number };
        };
      }
    | undefined;
  currentPage: number;
  error: ApolloError | undefined;
};

export const GeneralList: FC<GeneralListProps> = ({
  urlListProp,
  setPage,
  paginationReq,
  currentPage,
  error,
}) => {
  const { data: urlList } = urlListProp.short_urls;
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(+value);
  };

  if (error) return <>error</>;

  if (paginationReq) {
    const {
      paginatorInfo: { lastPage },
    } = paginationReq.short_urls;

    return (
      <>
        <UrlList title="Список ссылок" urlList={urlList} />
        <Pagination
          count={lastPage}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </>
    );
  }
  return null;
};
