import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 이메일 에러 메세지 state
  const [emailError, setEmailError] = useState("");

  // on으로 시작되는 함수들은 무조건 이벤트(e)가 들어온다. (onClick, onChange...)
  // => 이벤트 핸들러 함수 라고 부름

  /**
   * 이메일 저장
   */
  function onChangeEmail(e) {
    // console.log(e); //나의 행동(이벤트)
    // console.log(e.target); // 작동된 태그
    // console.log(e.target.value); // 작동된 태그에 입력된 값
    setEmail(e.target.value);
  }

  /**
   * 이메일 저장
   */
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  /**
   * 회원가입
   */
  function onClickSignup() {
    // 진짜 포장이 잘 됐는지 확인해보기
    console.log(email);
    console.log(password);

    // Backend 전송 전 간단하게 검증하기
    // 1. 이메일에 @가 들어가있지 않은 경우
    if (!email.includes("@")) {
      // alert("이메일이 올바르지 않습니다. @가 없음!");
      // document.getElementById("error").innerText = "이메일이 올바르지 않습니다. @가 없음!";
      setEmailError("이메일이 올바르지 않습니다. @가 없음!");
    } else {
      // 메시지 알림 이전, Backend 컴퓨터에있는 API(함수) 요청하기
      // ==> 요청작업은 추후 배움
      alert("회원가입을 축하합니다!");
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      {/* <div id="error"></div> */}
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
