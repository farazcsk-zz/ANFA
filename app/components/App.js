import React, {Component} from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import {DefaultRoute, RouteHandler, Link, browserHistory} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


injectTapEventPlugin();

class App extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};

	  this.handleTouchTap = this.handleTouchTap.bind(this);
	}

	handleTouchTap() {
		browserHistory.push('/');
	}
	render() {
		const style = {
			backgroundColor: '#F3F3F3',

			title: {
				cursor: 'pointer',
			},
		}

		let childrenWithProps = React.cloneElement(this.props.children);
		
		return (
			<div style={style}>
				<MuiThemeProvider>
					<AppBar 
						style={{backgroundColor: '#FFFFFF', color: '#000000'}} 
						title={<span style={style.title}>ANFA</span>}
						onTitleTouchTap={this.handleTouchTap} 
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