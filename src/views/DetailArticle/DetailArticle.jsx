import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { myPosts } from '../../posts/posts.js';
import { handleUp, shuffleArray } from "../../helpers/utils.js";
import { ProgressSpinner } from 'primereact/progressspinner';
import {marked} from 'marked';
import PropTypes from 'prop-types';


export const DetailArticle = () => {
    const { id } = useParams();
    const [selectedPost, setSelectedPost] = useState(null);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        const post = myPosts.find(post => post.id === parseInt(id));
        setSelectedPost(post);
    }, [id]);

    useEffect(() => {
        if (selectedPostId !== null) {
            handleUp()
        }
    }, [selectedPostId]);

    // const filteredPosts = selectedPostId
    //     ? myPosts.filter(post => post.id !== selectedPostId)
    //     : myPosts;
    
    const filteredPosts = myPosts.filter(post => post.id !== parseInt(id));

    const shuffledPosts = shuffleArray(filteredPosts);
    const postsToShow = shuffledPosts.slice(0, 3);

    const PostContent = ({ content }) => {
        const htmlContent = marked(content);
        return <div className="post-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    };

    return (
        <>
            <div className="section-post">
                <section className="container-detail-posts selected-post">
                    {selectedPost ? (
                        <div className="post-detail">
                            <h2>{selectedPost.title}</h2>
                            <p>{selectedPost.category} ‣ <span>{selectedPost.subCategory}</span> ‣ <span style={{ color: '#333333' }}>{selectedPost.date}</span> </p>
                            <div className="image-detail-post">
                                <img src={selectedPost.image} alt={selectedPost.image} />
                            </div>
                            {/* <p className="post-content">{selectedPost.content}</p> */}
                            <PostContent content={selectedPost.content} />

                        </div>
                    ) : (
                        <ProgressSpinner />
                    )}
                </section>
                <section className="more-posts container-detail-posts">
                    <h1 className="section-title">MAS ARTÍCULOS</h1>
                    <div className="container-more-posts">
                        {postsToShow.map(post => (
                            <Link
                                key={post.id}
                                to={`/post/${post.id}`}
                                className='option'
                                onClick={() => setSelectedPostId(post.id)}
                            >
                                <div className="thumbnails">
                                    <section className="one">
                                        <div style={{ height: '55px' }}>
                                            <img src={post.image} alt={post.image} />
                                        </div>
                                    </section>
                                    <section className="two">
                                        <h1>{post.title}</h1>
                                        <p style={{ color: 'black', cursor: 'auto' }}>{post.category} - <span>
                                            {post.subCategory}</span></p>
                                        <p style={{ color: '#333333', cursor: 'auto' }}>{post.date}</p>
                                    </section>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
};


DetailArticle.propTypes = {
    content: PropTypes.string,
}