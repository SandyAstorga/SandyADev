import { Tag } from 'primereact/tag';
import { useContext } from 'react';
import { categories } from '../../helpers/utils.js';
import { CategoryContext } from '../../Contexts/CategoryProvider.jsx';
import { useNavigate } from 'react-router-dom';

export const Tags = () => {
    const { setSelectedCategory } = useContext(CategoryContext);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate('/');
    };

    return (
        <>
            <div className='container-tags'>
                <h1 className='title-categories'>Categorias</h1>
                <div className='tags'>
                    {categories?.map((category, index) => (
                        <div key={index} onClick={() => handleCategoryClick(category.label)}>
                            <Tag className='color-tag' rounded>{category.label}</Tag>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
