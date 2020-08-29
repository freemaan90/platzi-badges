import React, { Component } from 'react';
import './styles/BadgeDetails.css';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import BadgeDetails from './BadgeDetails';

export default class BadgeDetailsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: undefined,
			modalIsOpen: false
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });
		try {
			const data = await api.badges.read(this.props.match.params.badgeId);
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

	handleCloseModal = (e) => {
		this.setState({
			modalIsOpen: false
		});
	};
	handleOpenModal = (e) => {
		this.setState({
			modalIsOpen: true
		});
	};

	handleDeleteBadge = async (e) => {
		this.setState({ loading: true, error: null });

		try {
			await api.badges.remove(this.props.match.params.badgeId);
			this.setState({ loading: false });

			this.props.history.push('/badges');
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}
		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}

		return (
			<BadgeDetails
				onDeleteBadge={this.handleDeleteBadge}
				onCloseModal={this.handleCloseModal}
				onOpenModal={this.handleOpenModal}
				modalIsOpen={this.state.modalIsOpen}
				badge={this.state.data}
			/>
		);
	}
}
