import { useEffect, useState } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import InvestorCard from '../InvestorCard/InvestorCard';
import './Home.css';

// const investors = [
//   { id: 1, name: 'John Doe Ventures', sector: 'Technology', fundingStage: 'Seed' },
//   { id: 2, name: 'Innovate Fund', sector: 'Healthcare', fundingStage: 'Series A' },
//   // Add more investor data here
// ];

const Home = () => {
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
    window.location.href = `/investor/${id}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/getinvestors');
        const data = await res.json();
        console.log(data)
        setInvestors(data); // Store API data in state
        setSearchResults(data); // Initialize search results with the full list
      } catch (error) {
        console.error('Error fetching investors:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="parent-component">
      <SearchBar onSearch={handleSearch} />
      <div className="results-container">
        {searchResults.map((investor) => (
          <InvestorCard key={investor._id} investor={investor} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;
