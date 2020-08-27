import React, { Component } from 'react';
import logo from '../images/Online_World.svg';
import conf from '../images/platziconf-logo.svg';
import '../pages/styles/Home.css';
class Home extends Component {
	render() {
		return (
			<div className="Home__container">
				<div className="Home__Left">
					<img src={conf} alt="conf" />
					<h1>PRINT YOUR BADGES</h1>
					<p>The easiest way to manage your conference</p>
					<button>Start Now</button>
				</div>
				<div className="Home__Right">
					<img className="Home__logo" src={logo} alt="logo" />
				</div>
			</div>
		);
	}
}

export default Home;
