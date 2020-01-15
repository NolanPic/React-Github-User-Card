import React, { Component } from 'react';
import axios from 'axios';
import Profile from './components/Profile';
import Followers from './components/Followers';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const Main = styled.main`
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
`;

class App extends Component {

  state = {
    profile: null,
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/NolanPic')
      .then(res => {

        // set profile
        this.setState({
          profile: res.data
        })

        // now fetch followers
        axios.get(res.data.followers_url)
          .then(results => {
            this.setState({
              followers: results.data
            });
          })
      })
      .catch(err => console.warn(err));
  }

  render() {

    const { profile, followers } = this.state;

    return (
      <Router>
        <Main>
          <Profile profile={profile} />
          <h3>Followers</h3>
          <Followers followers={followers} />
        </Main>
      </Router>
    );
  }
}

export default App;
