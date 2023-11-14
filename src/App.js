import './scss/App.scss';
import Nav from './layout/nav/Nav';
import Routes from './routes';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Nav/>
      <Routes/>
      <ToastContainer position="top-center" theme="colored" limit={2}/>
    </>
  );
}

export default App;
