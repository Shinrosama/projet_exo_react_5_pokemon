import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import HomePage from './Pages/HomePage';
import PokemonsPage from './Pages/PokemonsPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
