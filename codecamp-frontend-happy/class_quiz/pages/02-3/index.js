/**
 * state를 활용하여 인증번호 생성하기
 */
import { useState } from "react";

export default function RandomNumberPage() {
  // 1. let, document.getElementById() 사용
  function onClickRandomNumberLet() {
    document.getElementById("number").innerText = String(
      Math.floor(Math.random() * 1000000)
    ).padStart(6, "0");
    // String.prototype.padStart() : 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
    // padStart(목포 문자열 길이, 초과시 나오는 문자열)
  }

  // 2. state 사용
  const [number, setNumber] = useState("000000");
  function onClickRandomNumberState() {
    setNumber(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  }

  return (
    <>
      <div>
        인증번호 : <span id="number">000000</span>
      </div>
      <button onClick={onClickRandomNumberLet}>인증번호 생성</button>
      <div>
        인증번호 : <span>{number}</span>
      </div>
      <button onClick={onClickRandomNumberState}>인증번호 생성</button>
    </>
  );
}
