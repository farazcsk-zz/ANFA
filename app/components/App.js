import React, {Component} from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


injectTapEventPlugin();

class App extends Component {
	render() {
		const style = {
			backgroundColor: '#F3F3F3',
			height: '100vh'
		}

		let childrenWithProps = React.cloneElement(this.props.children);
		return (
			<div style={style}>
				<MuiThemeProvider>
					<AppBar 
						style={{backgroundColor: '#FFFFFF', color: '#000000'}} 
						title='ANFA' 
						showMenuIconButton={false}
						titleStyle={{
							color: '#36333C'
						}}
					/>
				</MuiThemeProvider>
				{childrenWithProps}
			</div>
		)
	}
}
export default App