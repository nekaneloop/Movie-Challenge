import Header from './components/header';
import Selector from './components/Selector';
import Cards from './components/Cards';
import First from './components/First';
// import './App.css'

function App() {
    return (
      <div className='container'>
        <Header />
        <Selector />
        <Cards  />
        <h3> más destacados </h3>
        <First />
      </div>
      ) 
}

export default App;