import { SearchBar } from '../SearchBar/SearchBar';
import {categories} from '../../helpers/utils.js';

export const NavBar = () => {
    return (
        <div className="container-nav">
            <div className="nav-menu">
                {categories?.map((categorie, index)=> (
                    <div key={index}>
                    <p>{categorie.label}</p>
                    </div>
                ))}
            </div>
            <SearchBar/>
        </div>
    )
}
