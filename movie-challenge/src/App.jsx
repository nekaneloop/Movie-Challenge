import Header from './components/header';
import First from './components/First';
import Selector from './components/Selector';
import Detail from './components/Detail';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import DramaPage from './components/DramaPage';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Selector/>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/Drama" element={<DramaPage />} />
          <Route path="movie/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;