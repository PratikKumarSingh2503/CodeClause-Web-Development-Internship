import React from 'react';
import './genshin.css';
import { Link } from 'react-router-dom';

const GenshinImpact = () => {
  return (
    <div className='genshin'>
      <div className='genshinSec1'>
        <img className='genshinImg' src={{}} alt='' />
        <p>
          Genhsin Impact
        </p>
        <h5>to know-
          <a href='#'>
            <button>
              more
            </button>
          </a>
        </h5>
      </div>
      <div className='genshinSec2'>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
        </p>
        <div className='genshinbutton'>
          <Link to="/genshin-impact-easy-mode" className='genshinbut'>Easy</Link>
          <Link to="/genshin-impact-medium-mode" className='genshinbut'>Medium</Link>
          <Link to="/genshin-impact-hard-mode" className='genshinbut'>Hard</Link>
        </div>
        <div className='genshinpics'>
          <img className='genshinpic' src='' alt='' />
          <img className='genshinpic' src='' alt='' />
          <img className='genshinpic' src='' alt='' />
          <img className='genshinpic' src='' alt='' />
          <img className='genshinpic' src='' alt='' />
          <img className='genshinpic' src='' alt='' />
          <img className='genshinpic' src='' alt='' />
          <img className='genshinpic' src='' alt='' />
        </div>
      </div>
    </div>
  );
}

export default GenshinImpact;