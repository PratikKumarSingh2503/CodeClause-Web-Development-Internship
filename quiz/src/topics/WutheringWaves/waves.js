import React from 'react';
import './waves.css';
import { Link } from 'react-router-dom';

const WutheringWaves = () => {
  return (
    <div className='waves'>
      <div className='wavesSec1'>
        <img className='wavesImg' src={{}} alt='' />
        <p>
          Wuthering Waves
        </p>
        <h5>to know-
          <a href='#'>
            <button>
              more
            </button>
          </a>
        </h5>
      </div>
      <div className='wavesSec2'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
        </p>
        <div className='wavesbutton'>
          <Link to="/wuthering-waves-easy-mode" className='wavesbut'>Easy</Link>
          <Link to="/wuthering-waves-medium-mode" className='wavesbut'>Medium</Link>
          <Link to="/wuthering-waves-hard-mode" className='wavesbut'>Hard</Link>
        </div>
        <div className='wavespics'>
          <img className='wavespic' src='' alt='' />
          <img className='wavespic' src='' alt='' />
          <img className='wavespic' src='' alt='' />
          <img className='wavespic' src='' alt='' />
          <img className='wavespic' src='' alt='' />
          <img className='wavespic' src='' alt='' />
          <img className='wavespic' src='' alt='' />
          <img className='wavespic' src='' alt='' />
        </div>
      </div>
    </div >
  );
}

export default WutheringWaves;