import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from "react-router";
import "./Details.css"
import { Link } from "react-router-dom";

const Details = () => {
    const [border, setBorders] = useState([]);
    const [error, setError] = useState("");
    const country = useLocation().state.country;

    const getBorders = async() => {
        const bordersStr = country.borders.join(",");
        axios.get('https://restcountries.com/v3.1/alpha?codes='+bordersStr)
            .then(response => {
                setBorders(response.data)
            })
            .catch(error => setError(error));
    }

    useEffect(() => {
        getBorders();
    }, []);

    if (!country) {
        return <div>Loading</div>;
    }
    if (error) {
        return (
            <div class="error-message">
                There was an error processing your request.
            </div>
        )
    }
    console.log(border);
    return (
        <div className="details_main">
            <button className="back_button">
                <Link to="/">Back</Link>
            </button>
            <div className="container">
                <div className="detail_flag">
                    <img src={country.flags.png} alt="" />
                </div>

                <div className="detail_info">
                    <h3>{country.name.common}</h3>
                    <div className="description">
                        <div>
                            <h5><b>Native Name: </b><span>{Object.values(country.name.nativeName).map(nativeName => nativeName.official).join(', ')}</span></h5>
                            <h5><b>Population: </b>
                                <span>
                                    {new Intl.NumberFormat().format(country.population)}
                                </span>
                            </h5>
                            <h5><b>Region: </b><span>{country.region}</span></h5>
                            <h5><b>Sub Region: </b><span>{country.subregion}</span></h5>
                            <h5><b>Capital: </b><span>{country.capital}</span></h5>
                        </div>
                        <div>
                            <h5><b>Top Level Domain: </b><span>{country.tld[0]}</span></h5>
                            <h5><b>Currencies: </b><span>{Object.values(country.currencies).map(currency => currency.name).join(', ')}</span></h5>
                            <h5><b>Languages: </b><span>{Object.values(country.languages).join(', ')}</span></h5>
                        </div>
                    </div>
                    <div className="borders">
                        <h5><b>Border Countries: </b></h5>
                        {border.map((border) => (
                            <button className="border_button">
                                <Link to={`/${border.name.common}`} state={{country: border}}>{border.name.common}
                                </Link>   
                            </button>
                        ))} 
                    </div>
                </div>
            </div>

    </div>
  );
};

export default Details;