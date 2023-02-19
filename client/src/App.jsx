import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Group from './pages/group';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/*" element={<Home />}/>
          <Route path='/explore' element={<Group />} />
          <Route path='/group/*' element={<Group />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
