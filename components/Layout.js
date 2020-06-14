import Nav from './Nav';


export default function Layout({children}){
  return(
    <div className="container-global">
      <Nav/>
      {children}
      <style global jsx>
        {`
          * {
              margin: 0;
              padding: 0;
              outline: 0;
              box-sizing: border-box;
          }
          
          
          html, body, #__next{
              height: 100%;
          }
          
          body{
              -webkit-font-smoothing: antialiased !important;
          }
          body, input, button, textarea{
              font-family: 'Roboto', Arial, sans-serif;
          }
          a {
              text-decoration: none;
          }
          ul {
              list-style: none;
          }
          button{
              cursor: pointer;
          }
        `}
      </style>
      <style jsx>
        {`
          .container-global{
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
}