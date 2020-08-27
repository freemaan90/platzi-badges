import React, { Fragment, Component } from 'react';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
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
					<img className="img-fluid" src={header} alt="logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName}
								twitter={this.state.form.twitter}
								jobTitle={this.state.form.jobTitle}
								email={this.props.email}
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
