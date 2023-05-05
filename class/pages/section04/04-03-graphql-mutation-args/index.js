import { useMutation, gql } from "@apollo/client";

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
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
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
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
