import './App.css'
// import Header1 from './components/header1.jsx'
// import Alex from './pages/alex'
 import Header from './components/header1'
import Home from './pages/home.jsx'
import Exit from './pages/exit.jsx';
import Services from './pages/services.jsx';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';


function App() {
  return (
       <BrowserRouter>
           <Routes>
            <Route index element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/exit' element={<Exit/>}/>
           </Routes>
       </BrowserRouter>
  )
}

export default App

