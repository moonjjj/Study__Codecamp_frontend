/**
 * 06-01
 */
// 컨테이너 컴포넌트
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘세팅 } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; //export default로 한개만 가져오기
// import Test1, { test2 } from "./BoardWrite.queries"; // export와 export default 함께 가져오기
// import * as S from "./BoardWrite.styles"; // export 전부 가져오기
// S.BlueButton;
// S.RedInput;

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer, // writer state 를 넣음
        title: title, // title state 를 넣음
        contents: contents, // contents state 를 넣음
      },
    });
    console.log(result);
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <div>
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
      />
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$ </div>
    </div>
  );
}
