import { MenuBar } from '../components/MenuBar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
      <div className='container-card'>
        <Component {...pageProps} />
        <MenuBar />
      </div>
    </div>
)}

export default MyApp;