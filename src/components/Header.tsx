import React from 'react';
import logo from 'img/logo.png';

const logos = ['logo-bbc.png', 'logo-forbes.png', 'logo-techcrunch.png', 'logo-bi.png'];

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        {logos.map((logo, idx) => {
          const index = idx + 1;
          return <img src={require(`img/${logo}`).default} alt={`Seen on logo ${index}`} />;
        })}
      </div>
    </header>
  );
};

export default Header;
