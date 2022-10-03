import React, { FC } from "react";
import { UrlList } from "./UrlList";
import { Pagination } from "@mui/material";
import { UrlListItemProps } from "../components/UrlListItem";
import { ApolloError } from "@apollo/client";

type GeneralListProps = {
  urlListProp: { short_urls: { data: UrlListItemProps[] } };
  setPage: (page: number) => void;
  paginationReq:
    | {
        short_urls: {
          paginatorInfo: { lastPage: number; currentPage: number };
        };
      }
    | undefined;
  currentPage: number;
  loading: boolean;
  error: ApolloError | undefined;
};

export const GeneralList: FC<GeneralListProps> = ({
  urlListProp,
  setPage,
  paginationReq,
  currentPage,
  error,
  loading,
}) => {
  const { data: urlList } = urlListProp.short_urls;
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(+value);
  };

  if (loading) return <>loading</>;
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
