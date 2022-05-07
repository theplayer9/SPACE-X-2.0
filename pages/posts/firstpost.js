import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
export default function firstpost() {
  return (
    <Layout>
      <Head>
        <title> heading</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1> This is my first code in Next.js</h1>
      <h2>
        {" "}
        <Link href="/">
          <a> Back to home </a>
        </Link>
      </h2>
    </Layout>
  );
}
