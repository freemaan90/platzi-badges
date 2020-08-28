import React, { Component } from 'react';
import './styles/BadgesList.css';
import twitterLogo from '../images/twitterLogo.png';
class BadgesList extends Component {
	render() {
		return (
			<ul className="list-unstyled">
				{this.props.data.map((data) => {
					return (
						<li key={data.id}>
							{data.name}
							
						</li>
					);
				})}
			</ul>
		);
	}
}
export default BadgesList;
