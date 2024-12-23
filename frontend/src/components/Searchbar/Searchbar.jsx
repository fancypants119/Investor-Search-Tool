
/* eslint-disable react/prop-types */

import { useState } from 'react';
import "./SearchBar.css";
import { sectors, fundingStages } from './Datalist/options';

const SearchBar = ({ onSearch }) => {
    const [searchCriteria, setSearchCriteria] = useState({
      investorName: "",
      sector: "",
      fundingStage: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSearchCriteria({ ...searchCriteria, [name]: value });
    };
  
    const handleSearch = () => {
      onSearch(searchCriteria);
    };


  return (
    <div className="search-bar-container">
      <input
        type="text"
        name="investorName"
        placeholder="Investor Name"
        value={searchCriteria.investorName}
        onChange={handleInputChange}
        className="name-search-input"
      />

      <div className="dropdown-container">
        <input
          type="text"
          name="sector"
          placeholder="Sector"
          value={searchCriteria.sector}
          onChange={handleInputChange}
          className="sector-search-dropdown"
          list="sector-options"
        />
        <datalist id="sector-options">
          {sectors.map((sector) => (
            <option key={sector} value={sector} />
          ))}
        </datalist>
      </div>

      <div className="dropdown-container">
        <input
          type="text"
          name="fundingStage"
          placeholder="Funding Stage"
          value={searchCriteria.fundingStage}
          onChange={handleInputChange}
          className="funding-search-dropdown"
          list="funding-stage-options"
        />
        <datalist id="funding-stage-options">
          {fundingStages.map((stage) => (
            <option key={stage} value={stage} />
          ))}
        </datalist>
      </div>

      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
