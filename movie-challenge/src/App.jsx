import Header from './components/header';
import First from './components/first';
import Selector from './components/Selector';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import DramaPage from './components/DramaPage';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <h3> más destacados </h3>
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