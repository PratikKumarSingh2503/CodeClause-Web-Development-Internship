import React from 'react';
import './fantasy.css';
import { Link } from 'react-router-dom';

const TowerOfFantasy = () => {
  return (
    <div className='fantasy'>
      <div className='fantasySec1'>
        <img className='fantasyImg' src={{}} alt='' />
        <p>
          Honkai: fantasy Rail
        </p>
        <h5>to know-
          <a href='#'>
            <button>
              more
            </button>
          </a>
        </h5>
      </div>
      <div className='fantasySec2'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
        </p>
        <div className='fantasybutton'>
          <Link to="/tower-of-fantasy-easy-mode" className='fantasybut'>Easy</Link>
          <Link to="/tower-of-fantasy-medium-mode" className='fantasybut'>Medium</Link>
          <Link to="/tower-of-fantasy-hard-mode" className='fantasybut'>Hard</Link>
        </div>
        <div className='fantasypics'>
          <img className='fantasypic' src='' alt='' />
          <img className='fantasypic' src='' alt='' />
          <img className='fantasypic' src='' alt='' />
          <img className='fantasypic' src='' alt='' />
          <img className='fantasypic' src='' alt='' />
          <img className='fantasypic' src='' alt='' />
          <img className='fantasypic' src='' alt='' />
          <img className='fantasypic' src='' alt='' />
        </div>
      </div>
    </div>
  );
}

export default TowerOfFantasy;