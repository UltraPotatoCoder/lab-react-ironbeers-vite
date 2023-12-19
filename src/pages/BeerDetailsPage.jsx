import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL_ONE = 'https://ih-beers-api2.herokuapp.com/beers';

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [oneBeer, setOneBeer] = useState({});

  useEffect(() => {
    const getOneBeer = async () => {
      try {
        const response = await axios.get(`${API_URL_ONE}/${beerId}`);
        console.log(response);
        setOneBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOneBeer();
  }, [beerId]);

  return (
    <div>
      <div>
        <img src={oneBeer.image_url} alt={oneBeer.name} className='oneBeer' />
        <h3>{oneBeer.name}</h3>
        <h3>{oneBeer.tagline}</h3>
        <h3>{oneBeer.first_brewed}</h3>
        <h3>{oneBeer.attenuation_level}</h3>
        <h3>{oneBeer.description}</h3>
        <h3>{oneBeer.contributed_by}</h3>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
