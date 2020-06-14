import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';


const myStyle = {
  color: "#651FFF",
  fontsize: "18px",
}


export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Head>
            <title>Nextjs | focused </title>
          </Head>

          <h1>Hello world Nextjs</h1>
          
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

    <style jsx>{`
      .content {
        width: 100%;
        max-width: 1120px;
        margin: 20px auto;
      }

      .content p {
        margin-top: 10px;
      }
    `}</style>
    </Layout>
  );
}
