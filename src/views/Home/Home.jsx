import { useContext } from 'react';
import { CategoryContext } from '../../Contexts/CategoryProvider.jsx';
import { Card } from '../../components/CardsArticles/Card.jsx';
import { myPosts } from '../../posts/posts.js';
import { handleUp, postPrincipal, postsDestacados } from '../../helpers/utils.js';
import { Link } from 'react-router-dom';
import { CarouselPosts } from '../../components/Carousel/CarouselPosts.jsx';
import { Tags } from '../../components/Tags/Tags.jsx';
import { Tag } from 'primereact/tag';


export const Home = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const filteredPosts = selectedCategory ? myPosts.filter(post =>
    post.category.toLowerCase() === selectedCategory.toLowerCase()) : [];

  const showAllCategories = () => {
    setSelectedCategory('');
  };
  let data = postPrincipal(myPosts);
  let destacados = postsDestacados(myPosts);

  return (
    <>
      {selectedCategory || filteredPosts.length > 0 ? (
        <>
          <div className='container-filtered'>
            <h1>{selectedCategory ? selectedCategory.toUpperCase() : []}</h1>
            {selectedCategory && <Tag onClick={showAllCategories} className='color-tag' style={{color: 'black'}} rounded>Mostrar todos</Tag>}
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
              <h1>ARTÍCULO DE LA SEMANA</h1>
              <section className="post-principal">
                <img src={data?.image} alt={data?.title} />
                <div className='data'>
                  <p style={{ marginBottom: '.5rem' }}>💫</p>
                  <p className='categorie'>{data?.category}</p>
                  <Link key={data?.id} to={`/post/${data?.id}`} className='option' onClick={handleUp}>
                    <p className='title'>{data?.title}</p>
                  </Link>
                </div>
              </section>
            </div>
          ) : (
            <></>
          )}


          {destacados?.length > 0 ? (
            <>
              <h1 className='title-categories'>DESTACADOS</h1>
              <section className="posts">
                {destacados?.slice(0, 3).map(post => (
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
                ))}
              </section>
            </>
          ) : (
            <></>
          )}

          <CarouselPosts category="Programación" />

          <CarouselPosts category="Tecnología" />

          <CarouselPosts category="Videojuegos" />

        </>
      )}

    </>
  );
};

