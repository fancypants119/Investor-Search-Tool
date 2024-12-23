
import './InvestorCard.css';
/* eslint-disable react/prop-types */

const InvestorCard = ({ investor, onClick }) => {
  return (
    <div className="investor-card" onClick={() => onClick(investor.id)}>
      <h3>{investor.name}</h3>
      <p>Sector: {investor.sector}</p>
      <p>Funding Stage: {investor.fundingStage}</p>
    </div>
  );
};

export default InvestorCard;
