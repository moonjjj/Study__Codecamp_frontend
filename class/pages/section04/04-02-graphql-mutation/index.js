import { useMutation, gql } from "@apollo/client";

// 세팅
const 나의그래프큐엘세팅 = gql`
  mutation {
    createBoard(writer: "하하", title: "안녕하세요", contents: "반갑습니다.") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // useMutation 를 실행시키고 싶은 함수를 [] 안에 넣는다.
  // useMutation 초기값으로 세팅을 넣는다.
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    // 뭘 실행할지 괄호() 안에 입력 ==> 위에서 세팅했던 나의그래프큐엘세팅 을 요청함
    const result = await 나의함수();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
