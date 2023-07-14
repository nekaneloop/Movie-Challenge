import Header from './components/header';
import First from './components/First';
import Selector from './components/Selector';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import DramaPage from './components/DramaPage';
// import Banner from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Selector/>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/Drama" element={<DramaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;