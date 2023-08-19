// 바깥에 있으면 리렌더링돼도 다시 안 만들어짐
const fruits = [
    {number : 1, title: "레드향"},
    {number : 2, title: "레드향"},
    {number : 3, title: "레드향"},
    {number : 4, title: "레드향"},
    {number : 5, title: "레드향"},
    {number : 6, title: "레드향"},
];

export default function mapFruitsPage(){
    // 1. 가장 기본 예제
    const aaa = [<div>1 레드향</div>, <div>2 샤인머스캣</div>, <div>3 산청딸기</div>];


    return(
        <div>
            {/* 원래 하던 방식 */}
            {fruits.map((el, i)=>{
                return(
                    <div>
                        <span>{el.number}</span>
                        <span>{el.title}</span>
                    </div>
                )
            })}
            {/* 새로운 방식 */}
            {fruits.map(el => <div>{el.number} {el.title}</div>)}
        </div>
    )
}