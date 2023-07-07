import Header from './components/header';
import First from './components/first';
import Selector from './components/Selector';
// import './App.css'

function App() {
    return (
      <div className='container'>
        <Header />
        <h3> más destacados </h3>
        <Selector />
        <First />
      </div>
      ) 
}

export default App;