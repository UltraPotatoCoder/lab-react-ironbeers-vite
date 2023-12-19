// all the comments are for better understanding of the logic, this is the most challenging part for me
import { useState } from 'react';
import axios from 'axios';

const API_URL_ADD_BEER = 'https://ih-beers-api2.herokuapp.com/beers/new';

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  // Handle function for the input change:
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle the form submission:
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Makeing the API request to add a new beer with .post
      const response = await axios.post(API_URL_ADD_BEER, formData);
      console.log(response.data); // Log the response, you can handle it according to your needs
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add New Beer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tagline</label>
          <input
            type='text'
            name='tagline'
            value={formData.tagline}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>First Brewed</label>
          <input
            type='text'
            name='first_brewed'
            value={formData.first_brewed}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Brewers Tips</label>
          <input
            type='text'
            name='brewers_tips'
            value={formData.brewers_tips}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Attenuation Level</label>
          <input
            type='number'
            name='attenuation_level'
            value={formData.attenuation_level}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contributed By</label>
          <input
            type='text'
            name='contributed_by'
            value={formData.contributed_by}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type='submit'>Add Beer</button>
        </div>
      </form>
    </div>
  );
}

export default AddBeerPage;
