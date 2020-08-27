import React, { Component } from 'react';
import astronauts from '../images/astronauts.svg';
import conf from '../images/platziconf-logo.svg';
import '../pages/styles/Home.css';
import Badges from './Badges';
import { Link } from 'react-router-dom';
class Home extends Component {
	render() {
		return (
			<div className="Home__container">
				<div className="Home__Left">
					<img src={conf} alt="conf" />
					<h1>PRINT YOUR BADGES</h1>
					<p>The easiest way to manage your conference</p>
					<Link to={Badges} className="btn btn-primary">
						Start Now
					</Link>
				</div>
				<div className="Home__Right">
					<img className="Home__astronauts" src={astronauts} alt="logo" />
				</div>
			</div>
		);
	}
}

export default Home;
