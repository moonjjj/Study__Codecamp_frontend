/**
 * 06-01 (04-04 를 체계화하기)
 */
// 페이지 컴포넌트
// 조회
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container";

export default function BoardEditWrite() {

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <div>
      <div> ############## 여기는 페이지 입니다. ############## </div>
      <BoardWrite  isEdit={true} data={data}/>
      <div> ############## 여기는 페이지 입니다. ############## </div>
    </div>
  );
}
