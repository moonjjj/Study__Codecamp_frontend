/**
 * 05-01-static-routing 수업
 */

import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    // router.push : 페이지 이동
    router.push("/section05/05-01-static-routing-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기!!!</button>;
}
