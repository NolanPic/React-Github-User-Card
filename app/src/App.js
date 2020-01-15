import React, { Component } from 'react';
import axios from 'axios';
import Profile from './components/Profile';
import Followers from './components/Followers';
import styled from 'styled-components';
import { withRouter, Route } from 'react-router-dom';

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
    console.log('props', this.props);
    this.fetchData('NolanPic');
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      const username = this.props.location.pathname.substring(1);
      this.fetchData(username);
    }
  }

  fetchData = username => {
    axios.get(`https://api.github.com/users/${username}`)
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
      <Route exact path={['/', '/:username']}>
        <Main>
          <Profile profile={profile} />
          <h3>Followers</h3>
          <Followers followers={followers} />
        </Main>
      </Route>
    );
  }
}

export default withRouter(App);
