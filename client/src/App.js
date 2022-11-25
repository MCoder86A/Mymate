import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Group from './pages/group';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/explore' element={<Group />} />
          <Route path='/group/*' element={<Group />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
