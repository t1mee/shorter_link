import { gql } from "@apollo/client";

export const GET_SHORT_URL_LIST = gql`
  query GetUrls($page: Int) {
    short_urls(first: 10, page: $page) {
      data {
        id
        url
        short_url
        clicks
      }
    }
  }
`;
