import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';
export default class MyApp extends Component {
  render() {
    return (
      <div>
        <GithubCorner
			bannerColor="#151513"
			octoColor="#fff"
			size={80}
			direction="right" 
		/>
      </div>
    );
  }
}