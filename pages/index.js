
import App from './_app';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <App Component={Layout} pageProps={Layout}/>
  );
}
