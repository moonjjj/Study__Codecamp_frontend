import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

// 조회
const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function ViewProductPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.number,
    },
  });

  console.log(data);

  return (
    <>
      <div>판매자: {data ? data.fetchProduct?.seller : "loading..."}</div>
      <div>상품명: {data ? data.fetchProduct?.name : "loading..."}</div>
      <div>상품내용: {data ? data.fetchProduct?.detail : "loading..."}</div>
      <div>상품가격: {data ? data.fetchProduct?.price : "loading..."}</div>
    </>
  );
}
