const movie = {
  id: 1091051,
  title: "빅토리",
  releaseDate: "2024-08-14",
  company: "Annapurna Films, East Gate Company, Covenant Pictures",
  genres: ["코미디", "드라마"],
  subTitle: "스탠드 업! 텐션 업! 치얼 업!",
  description:
    "1999년 세기말, 거제의 댄스 콤비 필선과 미나는 댄스 연습실을 마련하기 위해  서울에서 전학온 치어리더 세현을 내세워 치어리딩 동아리를 만든다. 그렇게 9명의 멤버들이 모여 얼렁뚱땅 탄생한 밀레니엄 걸즈. 치형의 만년 꼴찌 거제상고 축구부를 우승으로 이끌어야만 하는데… 오직 열정만큼은 충만한 생판 초짜 치어리딩 동아리  밀레니엄 걸즈의 모두를 향한 신나는 응원이 펼쳐진다!",
  runtime: 119,
  posterImgUrl:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/tGoNbWpJDPpnW04Cmx19uzeBb3D.jpg",
};

export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <article className="flex flex-col gap-5">
      <div
        className="before:content-[' relative flex justify-center rounded-md bg-cover bg-center bg-no-repeat p-5 before:absolute before:inset-0 before:bg-black before:bg-opacity-70"
        style={{ backgroundImage: `url('${posterImgUrl})` }}
        aria-hidden
      >
        <img
          className="relative z-10 h-full max-h-96 rounded-md"
          src={posterImgUrl}
          alt={`${title} 포스터`}
        />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="space-y-2 opacity-50">
        <p>
          <time aria-label="개봉일" dateTime={releaseDate}>
            {releaseDate}
          </time>{" "}
          / <span aria-label="장르">{genres.join(", ")}</span> /{" "}
          <span aria-label="상영 시간">{runtime}분</span>
        </p>
        <p aria-label="제작사">{company}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold">{subTitle}</h3>
        <p aria-label="영화 설명">{description}</p>
      </div>
    </article>
  );
}
