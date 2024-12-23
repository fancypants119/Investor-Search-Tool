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
        (criteria.sector === '' || investor.sector.includes(criteria.sector)) &&
        (criteria.fundingStage === '' || investor.series.includes(criteria.fundingStage))
      );
    });
    setSearchResults(filteredResults);
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
