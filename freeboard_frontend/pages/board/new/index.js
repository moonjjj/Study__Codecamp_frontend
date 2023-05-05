import { gql, useMutation } from "@apollo/client";
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

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardWriteUI() {
  // 데이터 State
  const [writer, setWriter] = useState(""); // 이름
  const [password, setPassword] = useState(""); //비밀번호
  const [title, setTitle] = useState(""); // 제목
  const [contents, setContents] = useState(""); //내용
  const [createBoard] = useMutation(CREATE_BOARD); // 게시글 등록 Mutation
  // 에러메세지
  const [errorWriter, setErrorWriter] = useState(""); // 이름
  const [errorPassword, setErrorPassword] = useState(""); //비밀번호
  const [errorTitle, setErrorTitle] = useState(""); // 제목
  const [errorContents, setErrorContents] = useState(""); //내용

  // 데이터 저장
  function onChangeWriter(e) {
    // 이름
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setErrorWriter("");
    }
  }
  function onChangePassword(e) {
    //비밀번호
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setErrorPassword("");
    }
  }
  function onChangeTitle(e) {
    //제목
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setErrorTitle("");
    }
  }
  function onChangeContents(e) {
    //내용
    setContents(e.target.value);
    if (e.target.value !== "") {
      setErrorContents("");
    }
  }

  const onClickSubmit = async () => {
    // 데이터 빈칸 검증
    if (!writer) {
      setErrorWriter("이름을 입력해주세요.");
    }
    if (!password) {
      setErrorPassword("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setErrorTitle("제목을 입력해주세요.");
    }
    if (!contents) {
      setErrorContents("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          },
        },
      });
      console.log(result);
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={onChangeWriter}></Writer>
          <ErrorMessage>{errorWriter}</ErrorMessage>
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
          onChange={onChangeTitle}></Subject>
        <ErrorMessage>{errorTitle}</ErrorMessage>
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
        <RadioButton type="radio" id="youtube" writer="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" writer="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
