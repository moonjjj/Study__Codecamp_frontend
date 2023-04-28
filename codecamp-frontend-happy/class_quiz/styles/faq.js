import styled from "@emotion/styled";

// 변수명은 가장 앞글자를 대문자로 사용해야 한다.
export const Wrapper = styled.div`
  width: 640px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  margin: 0 auto;
`;
export const TopWrapper = styled.div`
  padding: 0 40px;
  border-bottom: 1px solid #cacaca;
`;
export const Top = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 40px 0;
  justify-content: flex-end;
`;
export const TopImg = styled.img`
  width: 19px;
  height: 19px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const TitleLeft = styled.div`
  font-weight: 700;
  font-size: 40px;
`;
export const TitleRight = styled.div`
  display: flex;
  align-items: center;
`;
export const TitleProfile = styled.img`
  margin-right: 19px;
  width: 60px;
  height: 60px;
`;

export const TitleName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  color: #000000;
`;

export const TitleArrow = styled.img`
  width: 12px;
  height: 12px;
`;
export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;
export const MenuItem = styled.li`
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  text-align: center;
  color: #cacaca;
`;
export const Content = styled.div``;
export const QnaList = styled.ul`
  padding: 0 50px;
  margin: 0;
  list-style: none;
`;
export const QnaItem = styled.li`
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const QnaTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
`;
export const QnaArrow = styled.img`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`;
export const BottomWrapper = styled.div`
  border-top: 1px solid #dcdcdc;
`;
export const BottomList = styled.ul`
  padding: 20px 0;
  margin: 0 75px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BottomItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
}
`;
export const BottomItemImg = styled.img`
  width: 40px;
  height: auto;
`;
export const BottomItemTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #adadad;
`;
