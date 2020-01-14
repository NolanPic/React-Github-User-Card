import React from 'react';
import Card from './Card';

const Profile = ({ profile }) => {
    console.log('profile', profile);
    return (
        <Card>
            {profile ? (
                <>
                    <img src={profile.avatar_url} />
                    <h1>{profile.name}</h1>
                    <h3>{profile.bio}</h3>
                </>
            )
            : (
                <p>Loading...</p>
            )}
        </Card>
    );
}

export default Profile;
