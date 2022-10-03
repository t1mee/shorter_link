import React, { FC } from "react";
import { List, ListItem, ListSubheader } from "@mui/material";
import { UrlListItem, UrlListItemType } from "../components/UrlListItem";

export type UrlListType = {
  title: string;
  urlList: UrlListItemType[] | [];
};

export const UrlList: FC<UrlListType> = ({ title, urlList }) => {
  return (
    <List
      sx={{
        height: { lg: "80vh", xs: "auto" },
        overflowY: "auto",
      }}
      subheader={<ListSubheader component="div">{title}</ListSubheader>}
    >
      {urlList.map((urlProps) => (
        <ListItem key={urlProps.id} disablePadding>
          <UrlListItem {...urlProps} />
        </ListItem>
      ))}
    </List>
  );
};
