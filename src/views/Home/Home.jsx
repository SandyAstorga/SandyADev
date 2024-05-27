import { useContext } from 'react';
import { CategoryContext } from '../../Contexts/CategoryProvider.jsx';
import { Card } from '../../components/CardsArticles/Card.jsx';
import { myPosts } from '../../posts/posts.js';
import { handleUp, postPrincipal, postsDestacados, getAllPosts } from '../../helpers/utils.js';
import { Link } from 'react-router-dom';
import { Tags } from '../../components/Tags/Tags.jsx';
import { Tag } from 'primereact/tag';
import { PaginatorCards } from '../../components/Paginator/PaginatorCards.jsx';



export const Home = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const filteredPosts = selectedCategory ? myPosts.filter(post =>
    post.category.toLowerCase() === selectedCategory.toLowerCase()) : [];

  const showAllCategories = () => {
    setSelectedCategory('');
  };
  let data = postPrincipal(myPosts);
  let destacados = postsDestacados(myPosts);
  let allData = getAllPosts(myPosts);



  return (
    <>
      {selectedCategory || filteredPosts.length > 0 ? (
        <>
          <div className='container-filtered'>
            <h1>{selectedCategory ? selectedCategory.toUpperCase() : []}</h1>
            {selectedCategory && <Tag onClick={showAllCategories} className='color-tag' style={{ color: 'black' }} rounded>Mostrar todos</Tag>}
          </div>

          <div className="posts">
            {filteredPosts.map(post => (
              <Link key={post.id} to={`/post/${post.id}`} className='option' onClick={handleUp}>
                <Card
                  key={post.id}
                  title={post.title}
                  image={post.image}
                  date={post.date}
                  category={post.category}
                  subCategory={post.subCategory}
                />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <Tags />

          {data ? (
            <div className="container-card-principal">
              <div className='container-card-one'>
                <>
                  <h1 style={{ color: '#D2649A', background: 'black', padding: '.5rem', borderRadius: '.5rem', margin: '0 1.5rem' }}>ARTÍCULO DE LA SEMANA</h1>
                </>
                <section className="post-principal">
                  <img src={data?.image} alt={data?.title} />
                  <div className='data'>
                    <div className='star'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill='#8E3E63' /></svg>
                    </div>
                    <p className='categorie'>{data?.category}</p>
                    <Link key={data?.id} to={`/post/${data?.id}`} className='option' onClick={handleUp}>
                      <p className='title'>{data?.title}</p>
                    </Link>
                  </div>
                </section>
              </div>

              {destacados?.length > 0 ? (
                <>
                  <section className='posts-destacados'>
                    {destacados?.slice(0, 2).map(post => (
                      <Link key={post.id} to={`/post/${post.id}`} className='option' onClick={handleUp}>
                        <Card className='post'
                          key={post.id}
                          category={post.category}
                          subCategory={post.subCategory}
                          title={post.title}
                          date={post.date}
                          image={post.image}
                          type={post.type}
                        />
                      </Link>
                    ))}
                  </section>
                </>
              ) : (
                <>No hay articulos por Mostrar</>
              )}
            </div>
          ) : (
            <>No hay articulos por Mostrar</>
          )}
          
          <PaginatorCards allData ={allData}/>

        </>
      )}

    </>
  );
};

