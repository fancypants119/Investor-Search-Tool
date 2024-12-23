
import './InvestorCard.css';
/* eslint-disable react/prop-types */

const InvestorCard = ({ investor, onClick }) => {
  return (
    <div className="investor-card" onClick={() => onClick(investor.id)}>
      <h3>{investor.firm}</h3>
      <p>{investor.name}</p>
      <div className="series-container">
      {investor.series.map((item, index) => (
        <span key={index} className="series-tag">
          {item}
        </span>
      ))}

    {investor.proptech_only && (
        <div className="proptech-tag">Proptech</div>
      )}
    </div>



    </div>
  );
};

export default InvestorCard;
