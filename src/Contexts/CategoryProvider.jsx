import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};


CategoryProvider.propTypes = {
    children: PropTypes.array,
};  