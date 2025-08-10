import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const [skins, setSkins] = useState([]);
  const location = useLocation();
  const valorantId = new URLSearchParams(location.search).get('valorantId');

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/store/${valorantId}`);
        setSkins(response.data);
      } catch (error) {
        console.error('Error fetching skins:', error);
      }
    };

    fetchSkins();
  }, [valorantId]);

  return (
    <div>
      <h1>Your Valorant Store</h1>
      <div className="skins-container">
        {skins.map(skin => (
          <div key={skin.id} className="skin-item">
            <img src={skin.displayIcon} alt={skin.displayName} />
            <p>{skin.displayName}</p>
            <p>{skin.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
