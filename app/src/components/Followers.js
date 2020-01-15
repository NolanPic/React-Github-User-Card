import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FollowerList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
        width: 30%;
    }
`;

const Followers = ({ followers }) => {
    return (
        <FollowerList>
            {followers.map(follower => (
                <Card key={follower.login}>
                    <Link to={`/${follower.login}`}>
                        <img src={follower.avatar_url} alt={`${follower.name}'s avatar`} />
                    </Link>
                </Card>
            ))}
        </FollowerList>
    );
}

export default Followers;
