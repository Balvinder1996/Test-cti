import logo from './logo.svg';
import './App.css';
import Routing from './View/Routing';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <>
      <Routing />
      <ToastContainer/>
    </>
  );
}

export default App;
