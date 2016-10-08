import React, {Component} from "react";
import {Editor, EditorState, RichUtils} from 'draft-js';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class RichTextEditor extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	editorState: EditorState.createEmpty()
	  };
	  this.onChange = (editorState) => this.setState({editorState});
	  this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	handleKeyCommand(command) {
	    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
	    if (newState) {
	      this.onChange(newState);
	      return 'handled';
	    }
	    return 'not-handled';
  	}

	render() {
		const paperStyle = {
		  height: '100%',
		  width: 'inherit',
		  margin: 20,
		  padding: 10,
		  display: 'inline-block',
		  border: '2px solid #36BA93'
		};
		return (
			<MuiThemeProvider>
				<Paper style={paperStyle}>
					<Row className="show-grid">
						<Col md={12}>
          					<Editor 
          						editorState={this.state.editorState}
          						handleKeyCommand={this.handleKeyCommand} 
          						onChange={this.onChange} 
      						/>
          				</Col>
          			</Row>
        		</Paper>
    		</MuiThemeProvider>
		)
	}
}
export default RichTextEditor