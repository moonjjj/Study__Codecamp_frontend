import { useQuery, gql } from "@apollo/client";

// 조회
const FETCH_BOARD = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery(FETCH_BOARD);
  console.log(data?.fetchBoards);

  return (
    <>
      {/* <div>1번 게시글 이동이 완료되었습니다.</div> */}
      {/* 논리 연산자를 이용한 조건부 랜더링 */}
      {/* <div>작성자: {data && data.fetchBoard?.writer}</div> */}
      {/* 옵셔널 체이닝을 이용한 조건부 랜더링 */}
      {/* 옵셔널 체이닝은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환한다.  */}
      {/* <div>제목: {data?.fetchBoard?.title}</div> */}
      {/* 3항 연산자 사용하여 데이터가 들어오기 전 표시해주기 */}
      {/* <div>내용: {data ? data.fetchBoard?.contents : "로딩중입니다."}</div> */}
      {data?.fetchBoards.map((el) => (
        <div>
            <span>{el.number}</span>
            <span>{el.writer}</span>
            <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
