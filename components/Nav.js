import Link from 'next/link';

export default function Nav(){
  return (
    <div className="container">
      <div className="content">
        <ul>
          <li>
            <Link href="/">
            <a>Home page</a>
            </Link>
          </li>
          
          <li>
            <Link href="/about">
            <a>About page</a>
            </Link>
          </li>
        </ul>
      </div>
    
    <style jsx>
      {`
        .container{
          background: #651FFF;
          width: 100%;
        }

        .content{
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          height: 90px;
        }

        .content ul {
          display: flex;
          align-items:center;
        }

        .content ul li {
          padding: 10px;
        }

        .content li a {
          color: #FFF;
          font-weight: bold;
          font-size: 18px;
        }
      `}
    </style>
    </div>
  );
}