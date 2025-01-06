
/* eslint-disable react/prop-types */

import { useState } from 'react';
import "./SearchBar.css";
import { sectors, fundingStages, basedIn, areaofpreference, basedInCity, techMedium } from './Datalist/options';

import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import { styled, lighten, darken } from '@mui/material';


const SearchBar = ({ onSearch }) => {

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

    const [searchCriteria, setSearchCriteria] = useState({
      investorName: "",
      sector: [],
      fundingStage: [],
      minInvestment: "",
      basedin: [],
      areaofpreference: [],
      basedinCity: [],
      investorFirm: "",
      techMedium: [],
      proptechOnly: false,
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSearchCriteria({ ...searchCriteria, [name]: value });
    };
  
    const handleSearch = () => {
      onSearch(searchCriteria);
      console.log(searchCriteria)
    };

    const clearFilters = () => {
      const resetCriteria = {
        investorName: "",
        sector: [],
        fundingStage: [],
        minInvestment: "",
        basedin: [],
        areaofpreference: [],
        basedinCity: [],
        investorFirm: "",
        techMedium: [],
      };
    
      setSearchCriteria(resetCriteria); // Reset the state
      onSearch(resetCriteria); // Trigger the search with the reset criteria
    };


    const GroupHeader = styled('div')(({ theme }) => ({
      position: 'sticky',
      top: '-8px',
      padding: '4px 10px',
      color: theme.palette.primary.main,
      backgroundColor: lighten(theme.palette.primary.light, 0.85),
      ...theme.applyStyles('dark', {
        backgroundColor: darken(theme.palette.primary.main, 0.8),
      }),
    }));
    
    const GroupItems = styled('ul')({
      padding: 0,
    });



  return (
    <div className="search-bar-container">

        <div className='existing-filters'>


        <Autocomplete id="funding-stage"
        multiple
        limitTags={2}
        options={fundingStages}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={searchCriteria.fundingStage}
        onChange={(event, newValue) => {
        setSearchCriteria({ ...searchCriteria, fundingStage: newValue });
        }}
          renderInput={(params) => (
          <TextField
          {...params}
          placeholder="Funding Stage"
              sx={{ 
                  width: 300,
       }} 
            />
        )}
        />

      
     
      <Autocomplete id="sector"
        multiple
        limitTags={1}
        options={sectors}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={searchCriteria.sector}
        onChange={(event, newValue) => {
        setSearchCriteria({ ...searchCriteria, sector: newValue });
        }}
              renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Sector'
                sx={{ 
                    width: 250,
                    }} 
              />
        )}
        />
        
       <TextField id="minInvestment"
          type="number"
          placeholder="Min Investment"
          variant="outlined"
          name="minInvestment"
          value={searchCriteria.minInvestment}
          onChange={handleInputChange}
          sx={{
          }}
        />

<Autocomplete
        multiple
        limitTags={2}
        id="areaofpreference"
        options={areaofpreference}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={searchCriteria.areaofpreference}
        onChange={(event, newValue) => {
        setSearchCriteria({ ...searchCriteria, areaofpreference: newValue });
        }}
              renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Area of Preference'
                sx={{ 
                    width: 200,
                    }} 
              />
        )}
        />



        <label>
            PropTech Only
              <input
                  type="checkbox"
                  checked={searchCriteria.proptechOnly || false}
                  onChange={(e) => setSearchCriteria({ ...searchCriteria, proptechOnly: e.target.checked })}
              />
          </label>

        <button
        className="toggle-advanced-filters-button"
        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
      >
        {showAdvancedFilters ? "Hide Filters" : "More Filters ⚙️ "}
        </button>





        <button onClick={handleSearch} className="search-button">
        Search 🔎
      </button>

      <button 
      onClick={clearFilters}
      className="clear-filters-button">
        Clear Filters
      </button>
    

      {/* <Link to="/addinvestor">
      <button className="add-investor-button">Add Investor</button>
    </Link> */}

   </div>


{/* Advanced Filter */}

<div className={`advanced-filters ${showAdvancedFilters ? "expanded" : ""}`}>


<TextField
          type="text"
          id="firm"
          placeholder="Firm"
          variant="outlined"
          name="investorFirm"
          value={searchCriteria.investorFirm}
          onChange={handleInputChange}
          sx={{
          }}
        />



<TextField
          type="text"
          id="investorName"
          placeholder="Investor Name"
          variant="outlined"
          name="investorName"
          value={searchCriteria.investorName}
          onChange={handleInputChange}
          sx={{
          }}
        />


<Autocomplete id="based-in"
        multiple
        limitTags={2}
        options={basedIn.sort((a, b) => {
          if (a.type !== b.type) {
            return a.type === 'state' ? -1 : 1; 
          }
          return a.name.localeCompare(b.name);
        })}

        groupBy={(option) => option.type}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        value={searchCriteria.basedin}
        onChange={(event, newValue) => {
        setSearchCriteria({ ...searchCriteria, basedin: newValue });
        console.log(newValue)
      }}
          renderInput={(params) => (
          <TextField
          {...params}
          placeholder="Based in (State/Country)"
              sx={{ 
                  width: 250,
       }} 
            />
        )}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
        />

<Autocomplete
        multiple
        limitTags={2}
        id="techMedium"
        options={techMedium}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={searchCriteria.techMedium}
        onChange={(event, newValue) => {
        setSearchCriteria({ ...searchCriteria, techMedium: newValue });
        }}
              renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Tech Medium'
                sx={{ 
                    width: 200,
                    }} 
              />
        )}
        />


<Autocomplete
        multiple
        limitTags={2}
        id="areaofpreference"
        options={basedInCity}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={searchCriteria.basedinCity}
        onChange={(event, newValue) => {
        setSearchCriteria({ ...searchCriteria, basedinCity: newValue });
        }}
              renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Based in (City)'
                sx={{ 
                    width: 200,
                    }} 
              />
        )}
        />




</div>


</div>
  );
};

export default SearchBar;
