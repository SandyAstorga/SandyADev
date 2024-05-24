import { Card } from '../../components/CardsArticles/Card.jsx';
import { myPosts } from '../../posts/posts.js';
import { handleUp, postPrincipal } from '../../helpers/utils.js';
import { Link } from 'react-router-dom';

let data = postPrincipal(myPosts);

export const Home = () => {
  return (
    <>
      <div className="container-card-principal">
      <h1>ARTICULO DE LA SEMANA</h1>
        <section className="post-principal">
          <img src={data?.image} alt={data?.title} />
          <div className='data'>
            <p style={{marginBottom: '.5rem'}}>💫</p>
            <p className='categorie'>{data?.categorie}</p>
            <Link key={data.id} to={`/post/${data.id}`} className='option' onClick={handleUp}>
            <p className='title'>{data?.title}</p>
            </Link>
            <p>{data?.date}</p>
          </div>
        </section>
      </div>
      
      <h1>DESTACADOS</h1>
      <section className="posts">
        {myPosts?.slice(0,3).map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className='option' onClick={handleUp}>
          <Card
            key={post.id}
            categorie={post.categorie}
            subCategorie={post.subCategorie}
            title={post.title}
            date={post.date}
            image={post.image}
          />
          </Link>
        ))}
      </section>

      <h1>PROGRAMACION</h1>
      <section className="posts">
        {myPosts?.slice(0,3).map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className='option' onClick={handleUp}>
          <Card
            key={post.id}
            categorie={post.categorie}
            subCategorie={post.subCategorie}
            title={post.title}
            date={post.date}
            image={post.image}
          />
          </Link>
        ))}
      </section>
      
      <h1>TECNOLOGIA</h1>
      <section className="posts">
        {myPosts?.slice(0,3).map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className='option' onClick={handleUp}>
          <Card
            key={post.id}
            categorie={post.categorie}
            subCategorie={post.subCategorie}
            title={post.title}
            date={post.date}
            image={post.image}
          />
          </Link>
        ))}
      </section>

      <h1>VIDEOJUEGOS</h1>
      <section className="posts">
        {myPosts?.slice(0,3).map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className='option' onClick={handleUp}>
          <Card
            key={post.id}
            categorie={post.categorie}
            subCategorie={post.subCategorie}
            title={post.title}
            date={post.date}
            image={post.image}
          />
          </Link>
        ))}
      </section>

    </>
  )
}
