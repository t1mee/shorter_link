import { gql } from "@apollo/client";

export const GET_PAGINATION_INFO = gql`
  query GetPaginationInfo {
    short_urls(first: 10) {
      paginatorInfo {
        lastPage
        currentPage
      }
    }
  }
`;
