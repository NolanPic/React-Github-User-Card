import React, { Component } from 'react';
import axios from 'axios';
import Profile from './components/Profile';
import Followers from './components/Followers';

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
      <div className="App">
        <Profile profile={profile} />
        <h3>Followers</h3>
        <Followers followers={followers} />
      </div>
    );
  }
}

export default App;
