import React, { Component } from 'react';
import './styles/BadgesList.css';
class BadgesList extends Component {
	render() {
		return (
			<ul className="list-unstyled">
				{this.props.badges.map((badge) => {
					return (
						<li key={badge.id}>
							<div className="container">
								<div className="left">
									<img className="avatar" src={badge.avatarUrl} alt="avatar" />
								</div>
								<div className="right">
									<div className="fullname">
										{badge.firstName} {badge.lastName}
									</div>
									<div className="twitter">
										<img
											alt="Twitter logo"
											src="https://img.icons8.com/fluent/48/000000/twitter.png"
											className="tw-icon"
										/>@{badge.twitter}
									</div>
									<div className="job">{badge.jobTitle}</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}
export default BadgesList;
