import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_PRODUCT_SETTING = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function AddProductPage() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT_SETTING);
  const router = useRouter();

  const onChangeSeller = (e) => {
    //판매자
    setSeller(e.target.value);
  };
  const onChangeName = (e) => {
    //제품명
    setName(e.target.value);
  };
  const onChangeDetail = (e) => {
    //상품내용
    setDetail(e.target.value);
  };
  const onChangePrice = (e) => {
    //가격
    setPrice(Number(e.target.value));
  };

  // 상품등록 버튼 클릭
  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: price,
          },
        },
      });

      alert("상품이 등록되었습니다.");

      // 상세보기 페이지 이동
      router.push(`/05/boards/view/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1>상품 등록 페이지</h1>
      <div>
        판매자: <input type="text" onChange={onChangeSeller} />
      </div>
      <div>
        상품명: <input type="text" onChange={onChangeName} />
      </div>
      <div>
        상품내용: <input type="text" onChange={onChangeDetail} />
      </div>
      <div>
        상품가격: <input type="text" onChange={onChangePrice} />
      </div>
      <button onClick={onClickSubmit}>상품 등록</button>
    </>
  );
}
