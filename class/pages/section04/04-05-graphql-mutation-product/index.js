import { useMutation, gql } from "@apollo/client";

// 세팅
const CREATE_PRODUCT = gql`
  # 변수의 타입 적는 곳
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #실제 우리가 전달할 변수 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // useMutation 를 실행시키고 싶은 함수를 [] 안에 넣는다.
  // useMutation 초기값으로 세팅을 넣는다.
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    // 뭘 실행할지 괄호() 안에 입력 ==> 위에서 세팅했던 나의그래프큐엘세팅 을 요청함
    const result = await createProduct({
      variables: {
        seller: "판매자 이름",
        createProductInput: {
          name: "T-shirts",
          detail: "좋은 티셔츠",
          price: 30000,
        },
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
