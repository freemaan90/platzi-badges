import React, { Component, Fragment } from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import BadgesListItem from './BadgesListItem';
class BadgesList extends Component {
	render() {
		if (this.props.badges.length === 0) {
			return (
				<Fragment>
					<h3>No badges were found</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Create new Badge
					</Link>
				</Fragment>
			);
		}
		return (
			<ul className="list-unstyled">
				{this.props.badges.map((badge) => {
					return (
						<li key={badge.id}>
							<Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
								<BadgesListItem badge={badge} />
							</Link>
						</li>
					);
				})}
			</ul>
		);
	}
}
export default BadgesList;
