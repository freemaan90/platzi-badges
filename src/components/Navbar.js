import React from 'react';
import '../components/styles/Navbar.css';
import logo from '../images/rickandmorty.png';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<Link className="Navbar__brand" to="/">
						<img className="Navbar__brand-logo" src={logo} alt="Logo" width="100" height="50" />
						<span className="font-weight-light">unofficial</span>
						<span className="font-weight-bold">fanpage</span>
					</Link>
				</div>
			</div>
		);
	}
}
export default Navbar;
