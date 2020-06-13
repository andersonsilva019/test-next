import Link from 'next/link';

export default function About (){
  return (
    <div className="container">
      <h1>About page</h1>
      <Link href="/"><a>Home</a></Link>


      <style jsx>{`
        .container {
          background: #651FFF;
          height: 100%;
        }
      `}</style>
      
    </div>
  );
}

