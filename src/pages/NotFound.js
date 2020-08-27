import React, { Component } from 'react';
import notFound404 from '../images/Monster_404_Error.svg';
import './styles/NotFound.css';
class NotFound extends Component {
	render() {
		return (
			<div className="container">
				<img className="NotFound" src={notFound404} alt="404 Not Found" />
			</div>
		);
	}
}
export default NotFound;
