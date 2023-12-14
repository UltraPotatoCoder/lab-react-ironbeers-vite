import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='HomePage'>
      <button>
        <Link to='/beers'>Beers</Link>
      </button>
      <button>
        <Link to='/random-beer'>Random</Link>
      </button>
      <button>
        <Link to='/new-beer'>New</Link>
      </button>
    </div>
  );
}

export default HomePage;
