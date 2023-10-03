import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not

  const [alert, setAlert] = useState(null);
const showAlert = (message , type) =>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);
}
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert("Dark mode has been enabled" , "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // },2000);
      
      // setInterval(() => {
      //   document.title = "TextUtils is more amazing";
      // },1500);
      //not for user experience
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled" , "success");
      document.title = "TextUtils - light Mode";
    }
  }

  return (
    <>
     <Navbar title="Text Utils"
     aboutText ="About Us"
     mode = {mode} toggleMode ={toggleMode}
     />
     <Alert alert ={alert} />
     
     <div className="container mt-5">
     <Routes>
          <Route exact path="/about" element={ <About />} />
          <Route exact path="/" element={  <TextForm showAlert={showAlert} heading="Enter the text to analyzer"  mode = {mode} />} />
          </Routes>
     </div>
    
    </>
  );
}

export default App;
