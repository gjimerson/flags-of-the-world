import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/${country.name.common}`} state={{ country }}>
      <div className="card">
        <div className="flag">
          <img src={country.flags.png} alt="" />
        </div>
        <div className="info">
          <h4>{country.name.common}</h4>
          <h6>
            <b>Population:</b> {new Intl.NumberFormat().format(country.population)}
          </h6>
          <h6>
            <b>Region:</b> {country.region}
          </h6>
          <h6>
            <b>Capital:</b> {country.capital}
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
