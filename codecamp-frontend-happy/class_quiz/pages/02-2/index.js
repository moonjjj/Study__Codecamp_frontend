/**
 * state를 활용하여 카운터 만들기
 */
import { useState } from "react";
export default function CounterPage() {
  // 1. let, document.getElementById() 사용
  function onClickCountLet() {
    const countNum = Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = countNum;
  }

  // 2. state 사용
  const [count, setCount] = useState(0);
  function onClickCountState() {
    setCount(count + 1);
  }

  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickCountLet}>카운트증가</button>
      <br />
      <div>{count}</div>
      <button onClick={onClickCountState}>카운트증가</button>
    </>
  );
}
