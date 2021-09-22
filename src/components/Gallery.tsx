import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="gallery">
      {[...new Array(14)].map((i, idx) => {
        const index = idx + 1;
        return (
          <figure className={`gallery__item gallery__item--${index}`} key={idx}>
            <img
              src={require(`img/gal-${index}.jpeg`).default}
              alt={`Gallery img ${index}`}
              className="gallery__img"
            />
          </figure>
        );
      })}
    </section>
  );
};

export default Gallery;
