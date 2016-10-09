import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

class TastyNotification extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	open: false
	  };

	  this.handleRequestClose = this.handleRequestClose.bind(this);
	  this.handleRequestOpen = this.handleRequestOpen.bind(this);

	}

	componentWillReceiveProps() {
		if(this.props.open) {
			this.handleRequestOpen();
		}
	}
	handleRequestOpen() {
		this.setState({
	      open: true,
	    });
	}

	handleRequestClose()  {
	    this.setState({
	      open: false,
	    });
  	};
	
	render() {
		const style = {
			backgroundColor: '#F3F3F3',
			minHeight: '100vh',

			title: {
				cursor: 'pointer',
			},
		}

		return (
			<div>
				<MuiThemeProvider>
					<Snackbar
			          open={this.state.open}
			          message={this.props.message}
			          autoHideDuration={4000}
			          onRequestClose={this.handleRequestClose}
        			/>
				</MuiThemeProvider>
			</div>
		)
	}
}
export default TastyNotification