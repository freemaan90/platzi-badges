import React, { Component } from 'react';

class BadgeFrom extends Component {
	// state = {};
	// props.onChange = (e) => {
	// 	this.setState({
	// 		[e.target.name]: e.target.value
	// 	});
	// };

	// handleClick = (e) => {
	// 	console.log('Botton was clicked');
	// };

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log('Form was submitted');
	// 	console.log(this.state);
	// };

	render() {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<div className="form-group">
						<label>First Name</label>
						<input
							value={this.props.formValues.firstName}
							onChange={this.props.onChange}
							type="text"
							name="firstName"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label>Last Name</label>
						<input
							value={this.props.formValues.lastName}
							onChange={this.props.onChange}
							type="text"
							name="lastName"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							value={this.props.formValues.email}
							onChange={this.props.onChange}
							type="email"
							name="email"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label>Job Title</label>
						<input
							value={this.props.formValues.jobTitle}
							onChange={this.props.onChange}
							type="text"
							name="jobTitle"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label>Twitter</label>
						<input
							value={this.props.formValues.twitter}
							onChange={this.props.onChange}
							type="text"
							name="twitter"
							className="form-control"
						/>
					</div>
					<button onClick={this.handleClick} className="btn btn-primary">
						Save
					</button>

					{this.props.error && <p className="text-danger">{this.props.error.message}</p>}
				</form>
			</div>
		);
	}
}
export default BadgeFrom;
