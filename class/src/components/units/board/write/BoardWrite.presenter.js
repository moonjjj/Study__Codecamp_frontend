/**
 * 06-01
 */
// 프레젠터 컴포넌트
import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  // 여기는 프레젠터 부분이므로 자바스크립트를 지양

  return (
    <div>
      <div> @@@@@@@@@@@@ 여기는 프레젠터 입니다. @@@@@@@@@@@@ </div>
      <div>
        작성자 : <RedInput type="text" onChange={props.onChangeWriter} />
        제목 : <input type="text" onChange={props.onChangeTitle} />
        내용 : <input type="text" onChange={props.onChangeContents} />
        <BlueButton onClick={props.onClickSubmit}>
          GRAPHQL-API 요청하기
        </BlueButton>
      </div>
      <div> @@@@@@@@@@@@ 여기는 프레젠터 입니다. @@@@@@@@@@@@ </div>
    </div>
  );
}
