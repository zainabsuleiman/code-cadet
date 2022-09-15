import './App.css';

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './ui/components/navBar/navbar';
import Footer from './ui/components/footer/footer';
import Login from './ui/components/login/login';
import Recruite from './ui/components/recruite/recruite'
import Register from './ui/components/register/register'
import ContentPage from './ui/pages/recruitePage/recruitePage';
import ResendEmail from './ui/components/ResendEmail/ResendEmail';
import ResetPass from './ui/components/resetPass/resetPass'
import ResetPage from './ui/pages/resetPassPage/resetPage';



function App() {
  return (
    <div className="App b">
      <Navbar />
      <Router>
        <Routes>
          {/* <Route path='' element={<Navbar />}/> */}
          <Route exact path='/' element={<ContentPage page={<Recruite />}/>}/>
          <Route path='l' element= {<ContentPage page={<Login/>}/>}/>
          <Route path='c' element= {<ContentPage page={<Register/>}/>}/>
          <Route path='s' element= {<ResetPage page={<ResendEmail/>} />}/>
          {/* <Route path='s' element= {<ResendEmail />}/> */}
          <Route path='r' element= {<ResetPage page={<ResetPass/>}/>}/>
          {/* <Route path='c' element= {<ContentPage page={<Register/>}/>}/>
          <Route path='c' element= {<ContentPage page={<Register/>}/>}/>
          <Route path='c' element= {<ContentPage page={<Register/>}/>}/> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
