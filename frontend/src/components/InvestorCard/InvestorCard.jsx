
/* eslint-disable react/prop-types */

import './InvestorCard.css';



const InvestorCard = ({ investor }) => {

  // const navigate = useNavigate();
  const formatNumber = (number) => number.toLocaleString();

  const handleClick = () => {
    window.open(`/investor/${investor._id}`, '_blank');
  };


  return (
    <div className="investor-card" onClick={handleClick}>


      <div className='investor-name-flag'>
      <h3>{investor.firm}</h3>
      <img src={`https://flagcdn.com/w40/${investor.flag}.png`} alt="Flag" />
      </div>

      
      <p>{investor.name}</p>

      <p className="based-in-card-p">
  <span className="based-in-card">
    {investor.city && investor.state ? (
      <>
        <span style={{ fontSize: '0.9em' }}>{investor.city}</span>, {investor.state}
      </>
    ) : (
      'Location not available'
    )}
  </span>
</p>

      <div>
      <p>
  Min Investment: 
  <span className='span-investment-min'>
    {investor.investment_min ? `$${formatNumber(investor.investment_min)}` : "NA"}
  </span>
</p>
      </div>
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
