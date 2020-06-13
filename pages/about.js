import Link from 'next/link'

import Layout from '../components/Layout';


export default function About (){
  return (
    <Layout>
      <h1>About page</h1>
      <Link href="/"><a>Home</a></Link>
    </Layout>
  );
}