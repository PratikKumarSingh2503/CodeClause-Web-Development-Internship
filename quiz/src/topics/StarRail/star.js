import React from 'react';
import './star.css';
import { Link } from 'react-router-dom';

const StarRail = () => {
  return (
    <div className='star'>
      <div className='starSec1'>
        <img className='starImg' src={{}} alt='' />
        <p>
          Honkai: Star Rail
        </p>
        <h5>to know-
          <a href='#'>
            <button>
              more
            </button>
          </a>
        </h5>
      </div>
      <div className='starSec2'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
        </p>
        <div className='starbutton'>
          <Link to="/star-rail-easy-mode" className='starbut'>Easy</Link>
          <Link to="/star-rail-medium-mode" className='starbut'>Medium</Link>
          <Link to="/star-rail-hard-mode" className='starbut'>Hard</Link>
        </div>
        <div className='starpics'>
          <img className='starpic' src='' alt='' />
          <img className='starpic' src='' alt='' />
          <img className='starpic' src='' alt='' />
          <img className='starpic' src='' alt='' />
          <img className='starpic' src='' alt='' />
          <img className='starpic' src='' alt='' />
          <img className='starpic' src='' alt='' />
          <img className='starpic' src='' alt='' />
        </div>
      </div>
    </div>
  );
}

export default StarRail;