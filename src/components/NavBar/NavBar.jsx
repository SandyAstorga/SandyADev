import { useContext} from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import {categories} from '../../helpers/utils.js';
import { CategoryContext } from '../../Contexts/CategoryProvider.jsx';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const { setSelectedCategory } = useContext(CategoryContext);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate('/');
    };

    return (
        <div className="container-nav">
            <div className="nav-menu">
                {categories?.map((category, index)=> (
                    <div key={index} onClick={() => handleCategoryClick(category.label)}>
                    <p>{category.label}</p>
                    </div>
                ))}
            </div>
            <SearchBar/>
        </div>
    )
}
