import React from 'react';
import './posts.css';
import sportImg from './sport.avif';
import politicImg from './politics.jpg';
import businessImg from './business.jpeg';
import technoImg from './techno.jpeg';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div className='posts'>
            <div className='post'>
                <img className='postImg' src={sportImg} alt='' />
                <p>
                    Genhsin Impact
                </p>
                <h5>to know-
                    <a href='#'>
                        <button className='postbut'>
                            more
                        </button>
                    </a>
                </h5>
            </div>
            <div className='post'>
                <img className='postImg' src={politicImg} alt='' />
                <p>
                    Star Rail
                </p>
                <h5>to know
                    <a href='#'>
                        <button className='postbut'>
                            more
                        </button>
                    </a>
                </h5>
            </div>
            <div className='post'>
                <img className='postImg' src={technoImg} alt='' />
                <p>
                    Tower Of Fantasy
                </p>
                <h5>to know
                    <a href='#'>
                        <button className='postbut'>
                            more
                        </button>
                    </a>
                </h5>
            </div>
            <div className='post'>
                <img className='postImg' src={businessImg} alt='' />
                <p>
                    Wuthering Waves
                </p>
                <h5>to know
                    <a href='#'>
                        <button className='postbut'>
                            more
                        </button>
                    </a>
                </h5>
            </div>
            {/* <div className='post'>
                <img className='postImg' src={postImg} alt='' />
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
                <button className='postbut'>
                    <Link to="/news" className='midlink'>NEWS</Link>ore
                </button>
            </div> */}
        </div >
    );
}

export default Posts;