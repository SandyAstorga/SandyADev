import { InputText } from 'primereact/inputtext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Contexts/SearchContext';

export const SearchBar = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const { setSearchQuery } = useContext(SearchContext);

    const handleSearch = () => {
        setSearchQuery(input); 
        navigate(`/search/${input}`);
        setInput('')
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="container-search-bar" onClick={handleClick}>
            <InputText
                placeholder="Buscar"
                type="text"
                className='search-bar-input'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <svg
                className='icon-search'
                style={{ width: '18px', cursor: 'pointer' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                onClick={handleSearch}
            >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
        </div>
    );
};
