import React, {Component} from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TestCreator from './TestCreator';
import WorkoutCreator from './WorkoutCreator';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

class App extends Component {
	render() {
		return (
			<div>
				<MuiThemeProvider>
					<AppBar showMenuIconButton={false}/>
				</MuiThemeProvider>
			</div>
		)
	}
}
export default App