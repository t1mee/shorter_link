import { gql } from "@apollo/client";

export const SHORTEN_URL = gql`
  mutation ShortenUrl($url: String!) {
    shorten_url(url: $url) {
      short_url {
        url
        short_url
        id
        clicks
      }
    }
  }
`;
