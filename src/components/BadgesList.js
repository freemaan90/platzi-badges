import React, { Component, Fragment } from 'react';
import './styles/BadgesList.css';
import Skeleton from 'react-loading-skeleton';
class BadgesList extends Component {
	render() {
		return (
			<Fragment>
				<ul className="list-unstyled">
					{this.props.data.results.map((data) => {
						return (
							<li key={data.id}>
								<div className="container">
									<div className="left">
										{this.props.loading ? (
											<Skeleton circle={true} height={50} width={50} />
										) : (
											<img className="avatar" src={data.image} alt="avatar" />
										)}
									</div>
									<div className="right">
										{this.props.loading ? (
											<Skeleton count={1} />
										) : (
											<div className="fullname">{data.name}</div>
										)}
										{this.props.loading ? (
											<Skeleton count={1} />
										) : (
											<div className="twitter">{data.species}</div>
										)}
										{this.props.loading ? (
											<Skeleton count={1} />
										) : (
											<div className="job">{data.location.name}</div>
										)}
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</Fragment>
		);
	}
}
export default BadgesList;
