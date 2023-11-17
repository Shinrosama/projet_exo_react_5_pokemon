import { Link } from "react-router-dom";
import "./Header.scss"


function Header () {

    

    

  

    return ( 
        <header>
            <h1>Pokemon Libérez les tous!</h1>

            <nav>
                <ul>
                    <li className="logo">
                       < img className="log" src= "https://jolstatic.fr/www/captures/1951/6/58356.png" alt="logo pokemon"/>
                    </li>
                    <li>
                    <Link to="/">Acueil</Link>
                    </li>
                    <li>
                    <Link to="/pokemons">Pokemons</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;