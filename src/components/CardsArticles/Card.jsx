import PropTypes from 'prop-types';

export const Card = ({ title, image, date, category, subCategory, type}) => {
  return (
    <>
      <div className="post">
        {/* <div className='bg-tag'>
          <span className='type-tag'>{type}</span>
        </div> */}
        <div className={`bg-tag ${type === 'destacado' ? 'destacado' : ''}`}>
          <span className={`type-tag ${type === 'destacado' ? 'destacado' : ''}`}>{type}</span>
        </div>
        <section className='container-image'>
          <img className='image-post' src={image} alt={image} />
        </section>
        <section style={{padding: '0.5rem 0'}}>
          <h1 className='post-title'>{title}</h1>
          <p className='post-category'>{category} - <span>
            {subCategory}</span></p>
          <p className='post-date'>{date}</p>
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
