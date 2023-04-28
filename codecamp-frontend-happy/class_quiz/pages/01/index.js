import {
  Wrapper,
  TopWrapper,
  Top,
  TopImg,
  TitleWrapper,
  TitleLeft,
  TitleRight,
  TitleProfile,
  TitleName,
  TitleArrow,
  MenuList,
  MenuItem,
  Content,
  QnaList,
  QnaItem,
  QnaTitle,
  QnaArrow,
  BottomWrapper,
  BottomList,
  BottomItem,
  BottomItemImg,
  BottomItemTitle,
} from "../../styles/faq";

export default function FaqPage() {
  return (
    <div>
      <Wrapper>
        <TopWrapper>
          <Top>
            <TopImg src="/find.png" />
          </Top>
          <TitleWrapper>
            <TitleLeft>마이</TitleLeft>
            <TitleRight>
              <TitleProfile src="/profile.png" />
              <TitleName>임정아</TitleName>
              <TitleArrow src="/arrow.png" />
            </TitleRight>
          </TitleWrapper>
          <MenuList>
            <MenuItem>공지사항</MenuItem>
            <MenuItem>이벤트</MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Q&A</MenuItem>
          </MenuList>
        </TopWrapper>
        <Content>
          <QnaList>
            <QnaItem>
              <QnaTitle>Q.01 - 질문</QnaTitle>
              <QnaArrow src="/arrow.png" />
            </QnaItem>
            <QnaItem>
              <QnaTitle>Q.01 - 질문</QnaTitle>
              <QnaArrow src="/arrow.png" />
            </QnaItem>
            <QnaItem>
              <QnaTitle>Q.02 - 질문</QnaTitle>
              <QnaArrow src="/arrow.png" />
            </QnaItem>
            <QnaItem>
              <QnaTitle>Q.03 - 질문</QnaTitle>
              <QnaArrow src="/arrow.png" />
            </QnaItem>
            <QnaItem>
              <QnaTitle>Q.04 - 질문</QnaTitle>
              <QnaArrow src="/arrow.png" />
            </QnaItem>
            <QnaItem>
              <QnaTitle>Q.05 - 질문</QnaTitle>
              <QnaArrow src="/arrow.png" />
            </QnaItem>
            <QnaItem>
              <QnaTitle>Q.06 - 질문</QnaTitle>
              <QnaArrow src="/arrow.png" />
            </QnaItem>
          </QnaList>
        </Content>
        <BottomWrapper>
          <BottomList>
            <BottomItem>
              <BottomItemImg src="/home.png" />
              <BottomItemTitle>홈</BottomItemTitle>
            </BottomItem>
            <BottomItem>
              <BottomItemImg src="/map.png" />
              <BottomItemTitle>잇츠로드</BottomItemTitle>
            </BottomItem>
            <BottomItem>
              <BottomItemImg src="/heart.png" />
              <BottomItemTitle>마이찜</BottomItemTitle>
            </BottomItem>
            <BottomItem>
              <BottomItemImg src="/my.png" />
              <BottomItemTitle>마이</BottomItemTitle>
            </BottomItem>
          </BottomList>
        </BottomWrapper>
      </Wrapper>
    </div>
  );
}
