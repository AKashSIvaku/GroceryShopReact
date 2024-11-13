import React from 'react';
import './Profile.css';
import logo from '../ASSETS/logo/Profile.jpg';
const Profile = () => {
    const user = {
        name: 'Akash',
        email: '727723EUCS010@skcet.ac.in',
        bio: 'Software engineer with a passion for web development and UI/UX design.',
        photo: 'https://via.placeholder.com/150' // Replace with actual profile photo URL
    };
    return (
        <div className='profile-page'>
            <div className='profile-container'>
                <img 
                    src={logo}
                    alt='Profile' 
                    className='profile-photo' 
                />
                <h1 className='profile-name'>{user.name}</h1>
                <p className='profile-email'>{user.email}</p>
                <p className='profile-bio'>{user.bio}</p>
                {/* Add more user information or functionality here */}
            </div>
        </div>
    );
}

export default Profile;
