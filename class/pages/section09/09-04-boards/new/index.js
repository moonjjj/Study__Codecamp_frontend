/**
 * 06-01 (04-04 를 체계화하기)
 */
// 페이지 컴포넌트
import BoardWrite from "../../../../src/components/units/board/09-write2/BoardWrite.container";

export default function BoardNewWrite() {
  return (
    <div>
      <div> ############## 여기는 페이지 입니다. ############## </div>
      <BoardWrite isEdit={false}/>
      <div> ############## 여기는 페이지 입니다. ############## </div>
    </div>
  );
}
