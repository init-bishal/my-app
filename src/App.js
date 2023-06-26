// import logo from '../public/logo.192.png';
import './App.css';
import {React,useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router, 
//   Routes, 
//   Route 
// } from 'react-router-dom'

function App() {
const [mode, setMode] = useState('dark');// whether dark mode is enabled or not
const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{
      setAlert({
        msg:message, 
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },3000)
}
const  toggleMode=()=>{
        if(mode==='light')
        {
          setMode('dark')
          document.body.style.backgroundColor='#212529'
          showAlert("Dark has been enabled","success")
          document.title="TextUtils - Dark Mode Enabled" 
          setTimeout(()=>{
              document.title='TextUtils'
          },5000)
        }
        else{
          setMode('light')
          document.body.style.backgroundColor='white'
          showAlert("Light mode has been enabled",'success')
          document.title='TextUtils - Light Mode Enabled'
          setTimeout(()=>{
            document.title='TextUtils'
          },5000)

        }
  }
  return (
  <>
  {/* <Router> */}

  <Navbar title="Learnig React" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
   {/* <Routes>
       <Route path='/about' element={<About/>}/> */}
       {/* <Route path='/' element={<TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>} /> */}
        <TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>    
   {/* </Routes> */}



    {/* <About/> */}
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;

