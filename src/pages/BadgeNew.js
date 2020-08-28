import React, { Fragment, Component } from 'react';
import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import BadgeFrom from '../components/BadgeFrom';
import '../pages/styles/BadgeNew.css';
import api from '../api';
class BadgeNew extends Component {
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: ''
		}
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({
			loading: true,
			error: null
		});
		try {
			await api.badges.create(this.state.form);
			this.setState({
				loading: false
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	};

	render() {
		return (
			<Fragment>
				<div className="BadgeNew__hero">
					<img className=" BadgeNew__hero-img img-fluid" src={header} alt="logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName || 'FIRST_NAME'}
								lastName={this.state.form.lastName || 'LAST_NAME'}
								twitter={this.state.form.twitter || 'TWITTER'}
								jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
								email={this.state.form.email || 'EMAIL'}
							/>
						</div>
						<div className="col-6">
							<BadgeFrom
								onSubmit={this.handleSubmit}
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default BadgeNew;
