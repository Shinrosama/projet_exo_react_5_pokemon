import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/HomePage';
import PokemonsPage from './pages/PokemonsPage';
import PokemonDetail from './pages/PokemonDetail';
import TrainerDetailsPage from './pages/TrainerDetailsPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path='/pokemons/:pokemonId/details' element={<PokemonDetail />} />
        <Route path='/trainers/:trainerId/details' element= {<TrainerDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
