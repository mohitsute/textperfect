import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  } 

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils2" about="About"/> */}
      <BrowserRouter>
      <Navbar title="TextPerfect" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text   to analyze" mode={mode}/>}>
        </Route>
        <Route exact path="about" element={<About mode={mode}/> }/>
      </Routes> 
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
