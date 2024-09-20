export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  return <div>{params.id} 영화 상세 페이지</div>;
}
