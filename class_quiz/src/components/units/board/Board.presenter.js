export default function BoardUI(props) {
  return (
    <div>
      <div> @@@@@@@@@@@@ 여기는 프레젠터 입니다. @@@@@@@@@@@@ </div>
      <h1>상품 등록 페이지</h1>
      <div>
        판매자: <input type="text" onChange={props.onChangeSeller} />
      </div>
      <div>
        상품명: <input type="text" onChange={props.onChangeName} />
      </div>
      <div>
        상품내용: <input type="text" onChange={props.onChangeDetail} />
      </div>
      <div>
        상품가격: <input type="text" onChange={props.onChangePrice} />
      </div>
      <button onClick={props.onClickSubmit}>상품 등록</button>
      <div> @@@@@@@@@@@@ 여기는 프레젠터 입니다. @@@@@@@@@@@@ </div>
    </div>
  );
}
