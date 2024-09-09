import React, { useState }  from 'react';
import './home.css';
import Search from '../../components/Search/search';
import UserProfile from '../../components/UserProfile/userprofile';

const Home = () => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    return (
        <div className='home'>
            <p>
                Search users on Github
            </p>
            <Search setUserData = {(res)=>setUserData(res)} setLoading={setLoading} />

            {userData && <UserProfile userData = {userData} /> }
        </div>
    );
}

export default Home;