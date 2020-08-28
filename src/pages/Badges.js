import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Badges.css';
import confLogo from '../images/rickandmorty.png';
import BadgesList from '../components/BadgesList';

class Badges extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				results: []
			}
		};
		console.log('1. constructor()');
	}

	componentDidMount() {
		console.log('3. componentDidMount()');
		this.fetchCharacters();
	}

	fetchCharacters = async () => {
		const result = await fetch('https://rickandmortyapi.com/api/character/');
		const data = await result.json();

		this.setState({
			data: data
		});
	};

	componentDidUpdate(prevProps, prevState) {
		console.log('5. componentDidUpdate()');
		console.log({
			prevProps: prevProps,
			prevState: prevState
		});

		console.log({
			props: this.props,
			state: this.state
		});
	}

	componentWillUnmount() {
		console.log('6. componentWillUnmount()');
	}

	render() {
		console.log('2/4. render()');
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
						<Link to="/badges/new" className="btn btn-info">
							New Character
						</Link>
					</div>
					<BadgesList data={this.state.data.results} />
				</div>
			</Fragment>
		);
	}
}

export default Badges;
