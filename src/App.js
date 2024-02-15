import Nav from './components/Nav';
import Services from './components/Services';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/home/services' element={<Services/>} />
      </Routes>
     {/* <Home /> */}
    </div>
  );
}

export default App;
