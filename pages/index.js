import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';

const myStyle = {
  color: "#651FFF",
  fontsize: "18px",
}

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Nextjs | focused </title>
        <meta name="description" content="SEO nextjs react"/>
        <meta name="keywords" content="next react seo"/>
        <meta name="author" content="Anderson silva"/>
      </Head>

      <h1>Hello world Nextjs</h1>
      <Link href="/about"><a style={myStyle}>About Page</a></Link>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </Layout>
  );
}
