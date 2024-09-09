import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='nav'>
            <div className='left'>
                <h3>Q<span>uiz.</span></h3>
            </div>

            <div className='middle'>
                <Link to="/" className='midlink'>HOME</Link>
                <Link to="/quiz" className='midlink'>QUIZ</Link>
                <Link to="/" className='midlink'>CONTACT</Link>
                <Link to="/" className='midlink'>LOGOUT</Link>
            </div>

            <div className='right'>
                <form className="form">
                    <input id="search" type="text" class="input" placeholder="search..." />
                    <button id="clear" class="clear-results">clear</button>
                </form>
            </div>
        </div>
    );
}

export default Topbar;