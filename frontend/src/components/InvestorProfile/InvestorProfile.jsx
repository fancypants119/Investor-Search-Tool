import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './InvestorProfile.css';

const InvestorProfile = () => {
  const { id } = useParams(); // Get the investor ID from the route
  const [investor, setInvestor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchInvestor = async () => {
      try {
        // Simulated fetch - replace with your API call
        const response = await fetch(`http://localhost:3000/api/getinvestor/${id}`);
        console.log(id)
        if (!response.ok) {
          throw new Error('Failed to fetch investor data');
        }
        const data = await response.json();
        console.log(data)
        setInvestor(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestor();
  }, [id]);



  useEffect(() => {
    if (investor) {
      document.title = `${investor.firm || 'Unknown Investor'} - Investor Profile`;
    }
  }, [investor]); // Only update title when 'investor' state changes



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!investor) {
    return <div>No investor data available</div>;
  }

  return (
    <div className="investor-profile">
      <header className="profile-header">
        <h2>{investor.firm}</h2>
        <p>{investor.name}</p>
        <p>{investor.email}</p>
        <div className="investor-location">
          <p>{investor.city}, {investor.state}</p>
        </div>
        <a href={investor.video} target="_blank" rel="noopener noreferrer">
          <button className="view-video-btn">Watch Introduction Video</button>
        </a>
      </header>

      <section className="investor-details">
        <div className="section-title">Investment Details</div>
        <div className="investment-info">
          <div className="investment-range">
            <h4>Investment Range</h4>
            <p>${investor.investment_min} - ${investor.investment_max}</p>
          </div>
          <div className="investment-sweet-spot">
            <h4>Investment Sweet Spot</h4>
            <p>${investor.investment_sweet_spot}</p>
          </div>
        </div>

        <div className="section-title">Participation</div>
        <div className="participation-info">
          {investor.participation.map((role, index) => (
            <span key={index} className="role-tag">{role}</span>
          ))}
        </div>

        <div className="section-title">Investment Preferences</div>
        <div className="preferences">
          <div className="geography">
            <h4>Geography</h4>
            <p>{investor.geography.join(', ')}</p>
          </div>
          <div className="sectors">
            <h4>Sectors of Interest</h4>
            <p>{investor.sectorsofinterest.join(', ')}</p>
          </div>
          <div className="tech-medium">
            <h4>Technology Medium</h4>
            <p>{investor.tech_medium.join(', ')}</p>
          </div>
        </div>

        <div className="section-title">Series Interested In</div>
        <div className="series-info">
          {investor.series.map((series, index) => (
            <span key={index} className="series-tag">{series}</span>
          ))}
        </div>

        {investor.proptech_only && (
          <div className="inprofile-proptech-tag">Proptech</div>
        )}
      </section>
    </div>
  );
};

export default InvestorProfile;
