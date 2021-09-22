import React from 'react';
import sprite from 'img/sprite.svg';

const homes = [
  {
    name: 'Beautiful Familiy House',
    img: 'house-1.jpeg',
    country: 'USA',
    numberOfRooms: 5,
    area: 325,
    price: '$1,200,000',
  },
  {
    img: 'house-2.jpeg',
    name: 'Modern Glass Villa',
    country: 'Canada',
    numberOfRooms: 6,
    area: 450,
    price: '$2,750,000',
  },
  {
    img: 'house-3.jpeg',
    name: 'Cozy Country House',
    country: 'UK',
    numberOfRooms: 4,
    area: 450,
    price: '$850,000',
  },
  {
    img: 'house-4.jpeg',
    name: 'Large Rustical Villa',
    country: 'Portugal',
    numberOfRooms: 6,
    area: 480,
    price: '$1,950,000',
  },
  {
    img: 'house-5.jpeg',
    name: 'Majestic Palace House',
    country: 'Germany',
    numberOfRooms: 18,
    area: 4230,
    price: '$9,500,000',
  },
  {
    img: 'house-6.jpeg',
    name: 'Modern Familiy Apartment',
    country: 'Italy',
    numberOfRooms: 3,
    area: 180,
    price: '$600,000',
  },
];

const Homes: React.FC = () => {
  return (
    <section className="homes">
      {homes.map((home) => (
        <div className="home">
          <img src={require(`img/${home.img}`).default} alt="House 1" className="home__img" />
          <svg className="home__like">
            <use xlinkHref={`${sprite}#icon-heart-full`}></use>
          </svg>
          <h5 className="home__name">{home.name}</h5>
          <div className="home__location">
            <svg>
              <use xlinkHref={`${sprite}#icon-map-pin`}></use>
            </svg>
            <p>{home.country}</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use xlinkHref={`${sprite}#icon-profile-male`}></use>
            </svg>
            <p>{home.numberOfRooms} rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use xlinkHref={`${sprite}#icon-expand`}></use>
            </svg>
            <p>
              {home.area} m<sup>2</sup>
            </p>
          </div>
          <div className="home__price">
            <svg>
              <use xlinkHref={`${sprite}#icon-key`}></use>
            </svg>
            <p>{home.price}</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
      ))}
    </section>
  );
};

export default Homes;
