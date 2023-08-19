import { useQuery, gql, useMutation } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery(FETCH_BOARD);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    const id = Number(event.target.id);
    // 변수를 넘기고 싶다면, variables
    deleteBoard({
      variables: {
        number: id
      }, refetchQueries:[{query: FETCH_BOARD}]
    });
    alert('삭제되었습니다');
  }

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
        <div key={el.number}>
            <input type="checkbox" />
            <span>번호 : {el.number}</span>
            <span>제목 : {el.title}</span>
            <span>작성자 : {el.writer}</span>
            <span>
              <button id={el.number} onClick={onClickDelete}>삭제</button>
            </span>
        </div>
      ))}
    </>
  );
}
