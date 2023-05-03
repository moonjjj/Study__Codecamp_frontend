import { useState } from "react";
import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  ErrorMessage,
} from "../../../styles/emotion";

export default function BoardWriteUI() {
  // 데이터 State
  const [name, setName] = useState(""); // 이름
  const [password, setPassword] = useState(""); //비밀번호
  const [subject, setSubject] = useState(""); // 제목
  const [contents, setContents] = useState(""); //내용

  // 데이터 저장
  function onChangeName(e) {
    // 이름
    setName(e.target.value);
  }
  function onChangePassword(e) {
    //비밀번호
    setPassword(e.target.value);
  }
  function onChangeSubject(e) {
    //제목
    setSubject(e.target.value);
  }
  function onChangeContents(e) {
    //내용
    setContents(e.target.value);
  }

  // 에러메세지
  const [errorName, setErrorName] = useState(""); // 이름
  const [errorPassword, setErrorPassword] = useState(""); //비밀번호
  const [errorSubject, setErrorSubject] = useState(""); // 제목
  const [errorContents, setErrorContents] = useState(""); //내용

  function onClickSubmit() {
    // 데이터 빈칸 검증
    if (!name.length) {
      setErrorName("이름을 입력해주세요.");
    } else {
      setErrorName("");
    }
    if (!password.length) {
      setErrorPassword("비밀번호를 입력해주세요.");
    } else {
      setErrorPassword("");
    }

    if (!subject.length) {
      setErrorSubject("제목을 입력해주세요.");
    } else {
      setErrorSubject("");
    }
    if (!contents.length) {
      setErrorContents("내용을 입력해주세요.");
    } else {
      setErrorContents("");
    }
  }

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={onChangeName}></Writer>
          <ErrorMessage>{errorName}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를  입력해주세요."
            onChange={onChangePassword}></Password>
          <ErrorMessage>{errorPassword}</ErrorMessage>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을  작성해주세요.."
          onChange={onChangeSubject}></Subject>
        <ErrorMessage>{errorSubject}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={onChangeContents}
        />
        <ErrorMessage>{errorContents}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
