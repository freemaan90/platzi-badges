import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Badges.css';
import confLogo from '../images/rickandmorty.png';
import BadgesList from '../components/BadgesList';

class Badges extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nextPage: 1,
			loading: true,
			error: null,
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
		this.setState({ loading: true, error: null });
		try {
			const result = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
			const data = await result.json();

			this.setState({
				loading: false,
				data: {
					info: data.info,
					results: [].concat(this.state.data.results, data.results)
				},
				nextPage: this.state.nextPage + 1
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
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
					{!this.state.loading && (
						<div className="Badges__buttons">
							<button onClick={() => this.fetchCharacters()} className="btn btn-info">
								Load More
							</button>
						</div>
					)}
					<BadgesList data {...this.state} />
				</div>
			</Fragment>
		);
	}
}

export default Badges;
