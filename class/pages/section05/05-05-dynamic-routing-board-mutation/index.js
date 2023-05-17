import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const 나의그래프큐엘세팅 = gql`
  # 변수의 타입을 꼭 입력해주어야 한다.
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # grayql 에서 변수는 $ 이다. (앞에 $ 를 표시)
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  // GRAPHQL-API 요청하기 버튼 클릭시 실행
  const onClickSubmit = async () => {
    // 에러를 잡기위한 try, catch 문
    // ==> try에 있는 내용을 시도하다가 실패하면 다음에 있는 모든 줄들을 모두 무시하고, catch에 있는 내용이 실행됨
    try {
      const result = await 나의함수({
        // createBoard 안에 넣는 부분들
        variables: {
          // variables 이게 $ 역할을 한다.
          writer: "훈이",
          title: "안녕하세요.",
          contents: "내용입니다.",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);

      // result.data.createBoard.number : 등록되는 게시글의 번호
      // ==> 게시글을 등록하면 해당 게시글 페이지(게시글 보기) 로 이동
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      // error : 백엔드에서 주는 에러
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
