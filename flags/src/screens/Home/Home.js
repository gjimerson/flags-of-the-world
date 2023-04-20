import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import FilterDropdown from "../../components/FilterDropdown";
import axios from 'axios';
import './Home.css';
import CountryCard from "../../components/CountryCard";

const AllCountries = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        getAllCountries()
    }, []);
    
    const filterName = async(countryName) => {
        axios.get('https://restcountries.com/v3.1/name/'+countryName)
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
        <div className="home_main">
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
                    <CountryCard key={country.name.common} country={country} />
                ))}
            </div>
        </div>
    );
};

export default AllCountries;