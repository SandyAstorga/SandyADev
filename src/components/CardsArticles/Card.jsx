import PropTypes from 'prop-types';

export const Card = ({ title, image, date, category, subCategory, type}) => {
  return (
    <>
      <div className="post" style={{position: 'relative'}}>
        <div style={{position: 'absolute',top: '3%', left: '2%'}}>
          <span style={{textTransform: 'uppercase', fontWeight: '700', padding: '.2rem', color: 'black', borderRadius: '.2rem', fontSize: '.8rem' }}>{type}</span>
        </div>
        <section className='container-image'>
          <img className='image-post' src={image} alt={image} />
        </section>
        <section style={{padding: '0.2rem'}}>
          <h1>{title}</h1>
          <p className='post-category'>{category} - <span>
            {subCategory}</span></p>
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
  category: PropTypes.string,
  subCategory: PropTypes.string,
  type: PropTypes.string,
};
