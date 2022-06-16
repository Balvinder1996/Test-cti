import logo from './logo.svg';
import './App.css';
import Routing from './View/Routing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Routing />
      <ToastContainer
      autoClose={1200}
      position="bottom-left"/>
    </>
  );
}

export default App;
