import { gql } from "@apollo/client";

export const GET_SHORT_URL_LIST = gql`
  query GetUrls {
    short_urls(first: 10, page: 1) {
      data {
        id
        url
        short_url
        clicks
      }
    }
  }
`;
