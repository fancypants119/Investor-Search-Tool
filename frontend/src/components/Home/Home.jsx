import { useState } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import InvestorCard from '../InvestorCard/InvestorCard';
import './Home.css';

const investors = [
  { id: 1, name: 'John Doe Ventures', sector: 'Technology', fundingStage: 'Seed' },
  { id: 2, name: 'Innovate Fund', sector: 'Healthcare', fundingStage: 'Series A' },
  // Add more investor data here
];

const ParentComponent = () => {
  const [searchResults, setSearchResults] = useState(investors);

  const handleSearch = (criteria) => {
    const filteredResults = investors.filter((investor) => {
      return (
        (criteria.investorName === '' || investor.name.toLowerCase().includes(criteria.investorName.toLowerCase())) &&
        (criteria.sector === '' || investor.sector.toLowerCase().includes(criteria.sector.toLowerCase())) &&
        (criteria.fundingStage === '' || investor.fundingStage.toLowerCase().includes(criteria.fundingStage.toLowerCase()))
      );
    });
    setSearchResults(filteredResults);
  };

  const handleCardClick = (id) => {
    // Navigate to investor profile (replace with actual routing logic)
    window.location.href = `/investor/${id}`;
  };

  return (
    <div className="parent-component">
      <SearchBar onSearch={handleSearch} />
      <div className="results-container">
        {searchResults.map((investor) => (
          <InvestorCard key={investor.id} investor={investor} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
