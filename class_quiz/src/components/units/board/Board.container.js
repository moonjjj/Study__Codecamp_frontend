import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_PRODUCT_SETTING } from "./Board.queries";
import BoardUI from "./Board.presenter";

export default function Board() {
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
    <div>
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$</div>
      <BoardUI
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        onClickSubmit={onClickSubmit}
      />
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$</div>
    </div>
  );
}
