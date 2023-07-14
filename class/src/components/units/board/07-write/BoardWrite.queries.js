/**
 * 06-01
 */
// Graphql의 쿼리들
import { gql } from "@apollo/client";

export const 나의그래프큐엘세팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
