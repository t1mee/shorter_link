import React, { FC } from "react";
import { List, ListItem, ListSubheader } from "@mui/material";
import { UrlListItem, UrlListItemProps } from "../components/UrlListItem";

type UrlListProps = {
  title: string;
  urlList: UrlListItemProps[];
};

export const UrlList: FC<UrlListProps> = ({ title, urlList }) => {
  return (
    <List subheader={<ListSubheader component="div">{title}</ListSubheader>}>
      {urlList.map((urlProps) => (
        <ListItem key={urlProps.id} disablePadding>
          <UrlListItem {...urlProps} />
        </ListItem>
      ))}
    </List>
  );
};
