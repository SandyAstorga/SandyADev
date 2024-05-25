/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { myPosts } from '../../posts/posts.js';
import { getPosts, handleUp, responsiveOptions } from '../../helpers/utils.js';
import { Link } from 'react-router-dom';
import { Card } from '../CardsArticles/Card.jsx';
import PropTypes from 'prop-types';

export const CarouselPosts = ({category}) => {
    const [products, setProducts] = useState([]);
    const [numVisible, setNumVisible] = useState(4);

    
    useEffect(() => {
        getPosts(myPosts).then((data) => {
            const filteredPosts = data.filter(post => post.category.toLowerCase() === category.toLowerCase());
            setProducts(filteredPosts.slice(0, 5));
        

        if (filteredPosts.length <= 4) {
            setNumVisible(filteredPosts.length);
        }
    });
    }, [category]);

    const productTemplate = (post) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                        <Link key={post.id} to={`/post/${post.id}`} className='option' onClick={handleUp}>
                            <Card
                                key={post.id}
                                category={post.category}
                                subCategory={post.subCategory}
                                title={post.title}
                                date={post.date}
                                image={post.image}
                            />
                        </Link>
                </div>
            </div>
        );
    };

    return (
        <div className='container-carousel'> 
            {products?.length > 0 ? (
                <>
                <h1 className='title-categories'>{products[0].category}</h1>
                <Carousel value={products} numVisible={numVisible} numScroll={4} itemTemplate={productTemplate} responsiveOptions={responsiveOptions} />
                </>
            ) : (
                <></>
            )}
        </div>
    )
};

CarouselPosts.propTypes = {
    category: PropTypes.string,
};
