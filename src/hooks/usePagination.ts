import { gql } from "@apollo/client";

export const usePagination = (page: number) => gql`
query GetUrls {
    short_urls(first: 10, page: ${page}) {
      data {
        id
        url
        short_url
        clicks
      }
    }
  }
`;
