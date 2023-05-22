import {
  Wrapper,
  CardWrapper,
  Header,
  ProfileWrapper,
  ProfileIcon,
  Info,
  Writer,
  CreatedAt,
  Body,
  Title,
  Contents,
  BottomWrapper,
  Button,
} from "../../../styles/boardsView";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// API 요청
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardViewUI() {
  const router = useRouter();

  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <ProfileWrapper>
            <ProfileIcon src="/images/profile_icon.png" />
            <Info>
              <Writer>{data?.fetchBoard?.writer}</Writer>
              <CreatedAt>{data?.fetchBoard?.createdAt}</CreatedAt>
            </Info>
          </ProfileWrapper>
        </Header>
        <Body>
          <Title>{data?.fetchBoard?.title}</Title>
          <Contents>{data?.fetchBoard?.contents}</Contents>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
