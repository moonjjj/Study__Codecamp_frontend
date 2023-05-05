/**
 * REST-API 요청과 비동기 처리
 */

import axios from "axios";

export default function RestApiPage() {
  const onClickSync = async () => {
    // 데이터 받기
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSync}>[ REST-API 요청하기 ] </button>
    </>
  );
}
