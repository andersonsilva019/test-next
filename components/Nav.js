import Link from 'next/link';

export default function Nav(){
  return (
    <div>
      
      <Link href="/">
        <a>Home page</a>
      </Link>

      <Link href="/about">
        <a>About page</a>
      </Link>

    {/* <style>{`

      div {
        background: #651FFF;
      },

      a {
        text-decoration: none;
        color: #444;
        font-size: 18px;
        margin-left: 10px;
        padding: 10px;
      }
    
    `}</style> */}
    </div>
  );
}