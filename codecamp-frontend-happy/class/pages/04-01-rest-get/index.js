import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  //비동기 요청
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); //Promise {<pending>} ==> pending: 지연되고있다
  }

  //동기 요청
  //(함수는 비동기인데 이 함수를 동기적으로 기다리겠다.)
  // async function onClickSync() {  ==> 원래방식
  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data); // {id" 1, title: "정당의 목적이나 활동이 민주적...", co...
    console.log(result.data.title); // "정당의 목적이나 활동이 민주적...""

    setTitle(result.data.title);
  };

  return (
    <>
      {/* 비동기 */}
      <button onClick={onClickAsync}>Rest-API(비동기) 요청하기</button>
      {/* 동기 */}
      <button onClick={onClickSync}>Rest-API(동기) 요청하기</button>
      <div>{title}</div>
    </>
  );
}
