import React, { Fragment, Component } from 'react';
import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import BadgeFrom from '../components/BadgeFrom';
import '../pages/styles/BadgeNew.css';
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
								email={this.props.email || 'EMAIL'}
								avatarUrl="http://2.gravatar.com/avatar/cfd63b3a9ea278f235a4ace9021b29f4"
							/>
						</div>
						<div className="col-6">
							<BadgeFrom onChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default BadgeNew;
