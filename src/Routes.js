import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import MyPlants from './pages/MyPlants';
import PlantationsTutorial from './pages/PlantationsTutorial';
import PlantationsTutorialDetail from './pages/PlantationsTutorialDetail';


export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      	<Scene key="login" component={Login} title="Login" initial={true}/>
			      	<Scene key="signup" component={Signup} title="Register"/>
					<Scene key="menu" component={Menu} title="Menu"/>
					<Scene key="myplants" component={MyPlants} title="My Plants" hideNavBar={false}/>
					<Scene key="plantationstutorial" component={PlantationsTutorial} title="Plantations Tutorial" hideNavBar={false}/>
					<Scene key="plantationstutorialdetail" component={PlantationsTutorialDetail} title="Plantations Tutorial Detail" hideNavBar={false}/>
			    </Stack>
			 </Router>
			)
	}
}
