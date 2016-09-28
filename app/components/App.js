import React, {Component} from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
	render() {
		return (
			<div>
				<MuiThemeProvider>
					<AppBar title='WORKOUT' showMenuIconButton={false}/>
				</MuiThemeProvider>
				{childrenWithProps}
			</div>
		)
	}
}
export default App