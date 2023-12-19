import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL_ONE = 'https://ih-beers-api2.herokuapp.com/beers/random';

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    const getRandomBeer = async () => {
      try {
        const response = await axios.get(`${API_URL_ONE}`);
        console.log(response);
        setRandomBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomBeer();
  }, []);

  return (
    <div>
      <div>
        <img
          src={randomBeer.image_url}
          alt={randomBeer.name}
          className='oneBeer'
        />
        <h3>{randomBeer.name}</h3>
        <h3>{randomBeer.tagline}</h3>
        <h3>{randomBeer.first_brewed}</h3>
        <h3>{randomBeer.attenuation_level}</h3>
        <h3>{randomBeer.description}</h3>
        <h3>{randomBeer.contributed_by}</h3>
      </div>
    </div>
  );
}

export default RandomBeersPage;
