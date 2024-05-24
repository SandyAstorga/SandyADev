import PropTypes from 'prop-types';

export const Card = ({ title, image, date, categorie, subCategorie}) => {
  return (
    <>
      <div className="post">
        <section className='container-image'>
          <img className='image-post' src={image} alt={image} />
        </section>
        <section style={{padding: '0.2rem'}}>
          <h1>{title}</h1>
          <p style={{ color: 'black', cursor: 'auto' }}>{categorie} - <span>
            {subCategorie}</span></p>
          <p style={{ color: '#333333', cursor: 'auto' }}>{date}</p>
        </section>
      </div>
    </>
  )
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  categorie: PropTypes.string,
  subCategorie: PropTypes.string,
};
