
import './App.css';

// Components
import Navbar from './components/Navbar';
import Propad from './components/Propad';
import Addstudent from './components/Addstudent';
import Allstudent from './components/Allstudents';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Editstudent from './components/EditStudent';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element= {<Propad />} />
        <Route path='/add' element= {<Addstudent />} />
        <Route path="/all" element={<Allstudent />} />
        <Route path='/edit/:id' element={<Editstudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
