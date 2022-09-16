import './App.css';

import {HashRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './ui/components/navBar/navbar';
import Footer from './ui/components/footer/footer';
import Login from './ui/components/login/login';
import Recruite from './ui/components/recruite/recruite'
import Register from './ui/components/register/register'
import ContentPage from './ui/pages/recruitePage/recruitePage';
import ResendEmail from './ui/components/ResendEmail/ResendEmail';
import ResetPass from './ui/components/resetPass/resetPass'
import ResetPage from './ui/pages/resetPassPage/resetPage';
import LandingPage from './ui/pages/landingPage/landingPage';



function App() {
  return (
    <div className="App b">
      <Navbar />
      <Router>
        <Routes>
          
          <Route exact path='/' element={<LandingPage />}/>
          <Route exact path='recruite' element= {<ContentPage page={<Recruite/>}/>}/>
          <Route exact path='login' element= {<ContentPage page={<Login/>}/>}/>
          <Route exact path='create-account' element= {<ContentPage page={<Register/>}/>}/>
          <Route exact path='resend-email' element= {<ResetPage page={<ResendEmail/>} />}/>
          <Route exact path='reset-pass' element= {<ResetPage page={<ResetPass/>}/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
