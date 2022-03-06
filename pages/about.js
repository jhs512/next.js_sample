import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>앱소개 | 투두</title>
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>앱 소개 페이지</h1>

      <nav>
        <a href="/">메인</a>
        <a href="/about" style={{color:'red'}}>어바웃</a>
      </nav>
    </>
  )
}
