/**
 * GRAPHQL-API 요청하기
 */

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

// 1. createBoard
const CREATE_BOARD_SETTING = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

// 2. createProduct
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

export default function GraphqlMutationPage() {
  // 1. createBoard
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD_SETTING);

  const onClickBoardSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    console.log(writer);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  // 2. createProduct
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT_SETTING);

  const onClickRoductSubmit = async () => {
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

    console.log(result);
  };

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <>
      <div>
        <h1>게시글 등록</h1>
        작성자 : <input type="text" onChange={onChangeWriter} />
        제목 : <input type="text" onChange={onChangeTitle} />
        내용 : <input type="text" onChange={onChangeContents} />
        <button onClick={onClickBoardSubmit}>[ GRAPHQL-API 요청하기 ]</button>
      </div>
      <div>
        <h1>제품 등록</h1>
        판매자 : <input type="text" onChange={onChangeSeller} />
        제품명 : <input type="text" onChange={onChangeName} />
        정보 : <input type="text" onChange={onChangeDetail} />
        가격 : <input type="text" onChange={onChangePrice} />
        <button onClick={onClickRoductSubmit}>[ GRAPHQL-API 요청하기 ]</button>
      </div>
    </>
  );
}
