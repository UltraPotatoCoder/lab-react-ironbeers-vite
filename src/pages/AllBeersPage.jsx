import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className='beerGrid'>
      {beers &&
        beers.map(beer => {
          return (
            <div key={beer._id} className='BeerCard'>
              <Link to={`/beers/${beer._id}`}>
                <img
                  className='beerImages'
                  src={beer.image_url}
                  alt={beer.name}
                />
                <h3>{beer.name}</h3>
                <h3>{beer.tagline}</h3>
                <h3>{beer.contributed_by}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
