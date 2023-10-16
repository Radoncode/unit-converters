import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component';
import Currency from './routes/currency/currency.component';
import Length from './routes/length/length.component';
import Weight from './routes/weight/weight.component';
import Volume from './routes/volume/volume.component';
import Area from './routes/area/area.component';
import Navigation from './routes/navigation/navigation.component';

import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='/currency' element={<Currency/>} />
        <Route path='/length' element={<Length/>} />
        <Route path='/weight' element={<Weight/>} />
        <Route path='/volume' element={<Volume/>} />
        <Route path='/area' element={<Area/>} />
      </Route>
    </Routes>
  );
}

export default App;
