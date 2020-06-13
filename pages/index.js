
import App from './_app';
import Layout from '../components/_Layout';

export default function Home() {
  return (
    <App Component={Layout} pageProps={Layout}/>
  );
}
