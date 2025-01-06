import { useEffect, useState } from 'react';
import SearchBar from '../../Searchbar/Searchbar';
import './SheetDataHome.css';


const formatNumber = (number) => number.toLocaleString();

const SheetDataHome = () => {
  const [investors, setInvestors] = useState([]); // State to store API data
  const [searchResults, setSearchResults] = useState(investors);

  const handleSearch = (criteria) => { 
    const filteredResults = investors.filter((investor) => {
      return (
        (criteria.investorName === '' || investor.name.toLowerCase().includes(criteria.investorName.toLowerCase())) &&

        (criteria.investorFirm === '' || investor.firm.toLowerCase().includes(criteria.investorFirm.toLowerCase())) &&

        (criteria.investorFirm === '' || investor.firm.toLowerCase().includes(criteria.investorFirm.toLowerCase())) &&

        ( !criteria.proptechOnly || investor.proptech_only === true ) &&
       
          (criteria.sector.length === 0 ||
            criteria.sector.some(interest => 
              investor.sectorsofinterest.some(sectorInterest => sectorInterest.toLowerCase() === interest.toLowerCase())
            )) &&

          (criteria.fundingStage.length === 0 || 
            criteria.fundingStage.some(stage => 
              investor.series.some(investorStage => investorStage.toLowerCase() === stage.toLowerCase())
            )) &&

            (criteria.techMedium.length === 0 || 
              criteria.techMedium.some(medium => 
                investor.tech_medium.some(mediumTech => mediumTech.toLowerCase() === medium.toLowerCase())
              )) &&

        (criteria.minInvestment === '' || investor.investment_min <= criteria.minInvestment ) &&

        (criteria.basedin.length === 0 || 
          criteria.basedin.some(location => 
            typeof location === 'object' && location.name && investor.state.toLowerCase().includes(location.name.toLowerCase())
          )) &&


          (criteria.areaofpreference.length === 0 || 
            criteria.areaofpreference.some(preferedarea => 
              investor.geography.some(investorarea => investorarea.toLowerCase() === preferedarea.toLowerCase())
            )) &&

            (criteria.basedinCity.length === 0 || 
              criteria.basedinCity.some(bcity => 
                bcity.toLowerCase() === investor.city.toLowerCase()
              ))


      );
    });
    setSearchResults(filteredResults);
    console.log(filteredResults)
  };

  const handleCardClick = (id) => {
    // Navigate to investor profile (replace with actual routing logic)
    window.location.href = `/investorfromsheet/${id}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/getinvestorsfromsheet');
        const data = await res.json();
        console.log(data)
        setInvestors(data); 
        setSearchResults(data); 
      } catch (error) {
        console.error('Error fetching investors:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="sheet-parent-component">
      <SearchBar onSearch={handleSearch} />
      <div className="sheet-results-container">

        <div className="card-container-forsheetdata">

            {searchResults.map((row, index) => (
                
                <div 
                key={index} 
                className="sheetdatacard"
                onClick={handleCardClick}
                >
                         <div className='investor-name-flag'>
      <h3>{row[3]}</h3>
      <img src={`https://flagcdn.com/w40/${row[16]}.png`} alt="Flag" />
      </div>

            
      <p className="sheet-based-in-card-p">
  <span className="sheet-based-in-card">
    {row[6] && row[14] ? (
      <>
        <span style={{ fontSize: '0.9em' }}>{row[6]}</span>, {row[14]}
      </>
    ) : (
      'Location not available'
    )}
  </span>
</p>



<div>
      <p>Min Investment: 
        <span className='sheet-span-investment-min'>
        {formatNumber(row[7])}
        </span>
        </p>
      </div>
      <div className="sheet-series-container">
        <span className="sheet-series-tag">
          {row[13]}
        </span>
  
        {row[11] === "Yes" && (
  <div className="sheet-proptech-tag">Proptech</div>
)}


    </div>



                </div>
            ))}





        </div>
      </div>
    </div>
  );
};

export default SheetDataHome;
