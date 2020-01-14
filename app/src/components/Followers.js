import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const FollowerList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
        width: 30%;
    }
`;

const Followers = ({ followers }) => {
    console.log('followers', followers);
    return (
        <FollowerList>
            {followers.map(follower => (
                <Card key={follower.login}>
                    <img src={follower.avatar_url} alt={`${follower.name}'s avatar`} />
                    <h3>{follower.name}</h3>
                    <h5>{follower.bio}</h5>
                </Card>
            ))}
        </FollowerList>
    );
}

export default Followers;
