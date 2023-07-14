// 컨테이너 컴포넌트
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘세팅 } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

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

    if (e.target.value && title && contents) {
      setIsActive(true);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);

    if (writer && e.target.value && contents) {
      setIsActive(true);
    }
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);

    if (writer && title && e.target.value) {
      setIsActive(true);
    }
  };

  return (
    <div>
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
      />
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$ </div>
    </div>
  );
}
