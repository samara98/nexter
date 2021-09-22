import React from 'react';

const realtors = [
  {
    img: 'realtor-1.jpeg',
    name: 'Erik Feinman',
    record: 245,
  },
  {
    img: 'realtor-2.jpeg',
    name: 'Kim Brown',
    record: 212,
  },
  {
    img: 'realtor-3.jpeg',
    name: 'Toby Ramsey',
    record: 198,
  },
];

const Realtors: React.FC = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        {realtors.map((realtor, idx) => {
          const index = idx + 1;
          return (
            <>
              <img
                src={require(`img/${realtor.img}`).default}
                alt={`Realtor ${index}`}
                className="realtors__img"
              />
              <div className="realtors__details">
                <h4 className="heading-4 heading-4--light">{realtor.name}</h4>
                <p className="realtors__sold">{realtor.record} houses sold</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Realtors;
