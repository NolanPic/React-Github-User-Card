import React from 'react';
import Card from './Card';

const Profile = ({ profile }) => {
    return (
        <Card>
            {profile ? (
                <>
                    <img src={profile.avatar_url} />
                    <h1>{profile.name}</h1>
                    <h3>{profile.bio}</h3>
                    <img src={`http://ghchart.rshah.org/${profile.login}`} alt={`${profile.name}'s Github chart`} />
                </>
            )
            : (
                <p>Loading...</p>
            )}
        </Card>
    );
}

export default Profile;
