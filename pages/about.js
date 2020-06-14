import Layout from '../components/Layout';

export default function About (){
  return (
    <Layout>
      <div className="content">
        <h1>About page</h1>
      </div>    
      <style jsx>{`
        .content {
          width: 100%;
          max-width: 1120px;
          margin: 20px auto;
        }
      
      `}</style>
    </Layout>
  );
}

