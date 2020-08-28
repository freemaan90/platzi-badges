import React, { Component } from 'react';
import astronauts from '../images/logo.png';
import conf from '../images/rickandmortyverde.png';
import '../pages/styles/Home.css';
import { Link } from 'react-router-dom';
class Home extends Component {
	render() {
		return (
			<div className="Home__container">
				<div className="Home__Left">
					<img src={conf} alt="conf" />
					<p>Lista de personajes</p>
					<Link to="badges" className="btn btn-info">
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
