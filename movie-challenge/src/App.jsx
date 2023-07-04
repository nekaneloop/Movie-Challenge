import Header from './components/header';
import Selector from './components/Selector';
import Cards from './components/Cards';
import Api from './components/Api';
// import './App.css'

function App() {
    return (
      <div className='container'>
        <Header />
        <Selector />
        <Cards  />
        <Api />
      </div>
      ) 
}

export default App;