import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useTransition } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [isPending, startTransition] = useTransition();


  const handleClick = () => {
    startTransition(()=>{
      setShow(!show);
    })
  }

  return (
    <div className="App">
      <div style={{display:"flex" , marginLeft:"10px"}} >
      <div className='side_btn' style={{  height:"6vh" , marginTop:"450px"}}  >
        {/* <button onClick={handleClick} style={{ backgroundColor: "purple", color: "white",  }} > <CloseIcon /> </button> */}
      </div>
      <div className='open_close_sidebar'>
        {
          show ? <Sidebar /> : null
        }
      </div>
        </div>
    </div>
  );
}

export default App;
