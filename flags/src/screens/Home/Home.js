import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import FilterDropdown from "../../components/FilterDropdown";
import axios from 'axios';
import './Home.css';
import { Link } from "react-router-dom";

const AllCountries = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        getAllCountries()
    }, []);
    
    const filterName = async(countryName) => {
        axios.get('https://restcountries.com/v3.1/name/'+countryName+'?fullText=true')
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => setError(error));
    }

    const getAllCountries = async(countryName) => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => setCountries(response.data))
            .catch(error => setError(error)); 
    }

    const filterRegion = async(region) => {
        axios.get('https://restcountries.com/v3.1/region/'+region)
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => setError(error));
    }
    if (!countries) {
        return <div>Loading</div>;
    }
    if (error) {
        return (
            <div class="error-message">
                There was an error processing your request.
            </div>
        )
    }
    return (
        <div className="main_content">
            <div className="top_bar">
                <div className="search">
                    <SearchBar onSearch={filterName} />
                </div>
                <div className="filter">
                    <FilterDropdown onSelect={filterRegion} />
                </div>
            </div>
            <div className="countries_grid">
                {countries.map((country) => (
                <Link to={`/${country.name.common}`}>
                <div className="card">
                    <div className="card_img">
                        <img src={country.flags.png} alt="" />
                    </div>
                    <div className="card_info">
                        <h4>{country.name.common}</h4>
                        <h6><b>Population:</b> {new Intl.NumberFormat().format(country.population)}</h6>
                        <h6><b>Region:</b> {country.region}</h6>
                        <h6><b>Capital:</b> {country.capital}</h6>
                    </div>
                </div>
                </Link>
                ))}
            </div>
        </div>
    );
};

export default AllCountries;