import { Helmet } from "react-helmet-async";

const Bpage = () => {
  return (
    <div>
      <Helmet>
        <title>B페이지 - 서대원 SEO</title>
        <meta name="description" content="서대원 SEO 최적화 B" />
        {/*  og태그: Facebook이 웹 사이트에 더 풍부한 메타 데이터를 제공하기 위해 발명한 메타 데이터 프로토콜 */}
        <meta property="og:title" content="B페이지 - 서대원 SEO" />
        <meta property="og:description" content="B 서대원 SEO 최적화" />
        <meta property="og:url" content="https://seo-eight-virid.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
      </Helmet>
      <h1>B페이지 입니다.</h1>
    </div>
  );
};

export default Bpage;
