import Nav from './Nav';


export default function Layout({children}){
  return(
    <div>
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
              background: #256fff;
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
    </div>
  );
}