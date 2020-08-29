import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import MiniLoader from '../components/MiniLoader';

class Badges extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: undefined
		};
		// console.log('1. constructor()');
	}
	fetchData = async () => {
		this.setState({
			loading: true,
			error: null
		});
		try {
			const data = await api.badges.list();
			this.setState({
				loading: false,
				error: null,
				data: data
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	};

	componentDidMount() {
		// console.log('3. componentDidMount()');
		this.fetchData();

		this.intervalId = setInterval(this.fetchData, 5000);
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log('5. componentDidUpdate()');
		// console.log({
		// 	prevProps: prevProps,
		// 	prevState: prevState
		// });
		// console.log({
		// 	props: this.props,
		// 	state: this.state
		// });
	}

	componentWillUnmount() {
		// console.log('6. componentWillUnmount()');
		clearInterval(this.intervalId);
	}

	render() {
		// console.log('2/4. render()');
		if (this.state.loading && !this.state.data) {
			return <PageLoading />;
		}
		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}
		return (
			<Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
						</div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>

					<BadgesList badges={this.state.data} />
					{this.state.loading && <MiniLoader />}
				</div>
			</Fragment>
		);
	}
}

export default Badges;
