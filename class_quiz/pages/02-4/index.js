/**
 * state를 활용하여 회원가입 폼 만들기
 */

import { useState } from "react";
import { ErrorMessage } from "../../styles/emotion";

export default function SignupPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();
  // 에러메세지
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();

  // 데이터 저장
  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function onChangeCheckPassword(e) {
    setCheckPassword(e.target.value);
  }

  function onClickSignup() {
    //이메일에 @가 없으면 에러
    if (!email.includes("@")) {
      setErrorEmail("이메일을 확인해주세요.");
    } else {
      setErrorEmail("");
    }
    // 비밀번호와 비밀번호확인이 다르면 에러
    if (password !== checkPassword) {
      setErrorPassword("비밀번호를 확인해주세요.");
    } else {
      setErrorPassword("");
    }
  }

  return (
    <>
      <div>
        이메일
        <input type="text" onChange={onChangeEmail} />
        <ErrorMessage>{errorEmail}</ErrorMessage>
      </div>
      <div>
        비밀번호
        <input type="password" onChange={onChangePassword} />
        <ErrorMessage>{errorPassword}</ErrorMessage>
      </div>
      <div>
        비밀번호 확인
        <input type="password" onChange={onChangeCheckPassword} />
      </div>
      <button onClick={onClickSignup}>가입하기</button>
    </>
  );
}
