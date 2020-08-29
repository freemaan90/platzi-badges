import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import Home from '../pages/Home';
function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
					<Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
export default App;
