import React, { Component, Fragment } from 'react';
import twitterLogo from '../images/twitterLogo.png';
import Gravatar from './Gravatar';

export default class BadgeListItem extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="left">
						<Gravatar className="avatar" email={this.props.badge.email} alt="avatar" />
					</div>
					<div className="right">
						<div className="fullname">
							{this.props.badge.firstName} {this.props.badge.lastName}
						</div>
						<div className="twitter">
							<img alt="Twitter logo" src={twitterLogo} className="tw-icon" />@{this.props.badge.twitter}
						</div>
						<div className="job">{this.props.badge.jobTitle}</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
