import './App.css';
//import 'bootstrap/dist/bootstrap.min.css';
import Home from './components/Home';
import Client from './components/client/Client';
import Reception from './components/reception/Reception';

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Menage from './components/menage/Menage';
import Compta from './components/compta/Compta';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>

          <Routes>
            <Route path='/client' element={<Client/>}></Route>
          </Routes>

          <Routes>
            <Route path='/reception' element={<Reception/>}></Route>
          </Routes>

          <Routes>
            <Route path='/menage' element={<Menage/>}></Route>
          </Routes>

          <Routes>
            <Route path='/compta' element={<Compta/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
