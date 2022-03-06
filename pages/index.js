import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>메인 | 투두</title>
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>메인 페이지</h1>

      <nav>
        <a href="/" style={{color:'red'}}>메인</a>
        <a href="/about">어바웃</a>
      </nav>
    </>
  )
}
