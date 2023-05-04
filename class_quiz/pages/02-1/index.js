/**
 *  state를 활용하여 안녕하세요 ⇒ 반갑습니다 로 변경하기
 */

import { useState } from "react";

export default function HelloPage() {
  // 1. let, document.getElementById() 사용
  function onClickChangeLet() {
    document.getElementById("greeting").innerText = "반갑습니다";
  }

  // 2. state 사용
  const [greeting, setGreeting] = useState("안녕하세요");
  function onClickChangeState() {
    setGreeting("반갑습니다");
  }

  return (
    <>
      <button id="greeting" onClick={onClickChangeLet}>
        안녕하세요
      </button>
      <button onClick={onClickChangeState}>{greeting}</button>
    </>
  );
}
