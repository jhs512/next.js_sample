import "../styles/globals.css";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">
          <a>메인</a>
        </Link>

        <Link href="/about">
          <a>어바웃</a>
        </Link>

        <Link href="/contact">
          <a>연락처</a>
        </Link>
      </nav>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
