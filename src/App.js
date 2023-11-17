import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/HomePage';
import PokemonsPage from './pages/PokemonsPage';
import PokemonDetail from './pages/PokemonDetail';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path='/pokemons/:pokemonId/details' element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
