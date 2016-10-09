import React, {Component} from "react";
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormatBold from 'material-ui/svg-icons/editor/format-bold';
import FormatItalic from 'material-ui/svg-icons/editor/format-italic';
import FormatUnderlined from 'material-ui/svg-icons/editor/format-underlined';
import IconButton from 'material-ui/IconButton';
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

  	_onBoldClick() {
  		console.log(stateToHTML(this.state.editorState.getCurrentContent()));
    	this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  	}

  	_onItalicClick() {
    	this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  	}

  	_onUnderlineClick() {
    	this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
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
							<div>
								<IconButton
									onClick={this._onBoldClick.bind(this)}
									tooltip="BOLD"
									tooltipPosition="top-center"
								>
									<FormatBold style={{cursor: 'pointer'}}/>
								</IconButton>
								<IconButton
									onClick={this._onItalicClick.bind(this)}
									tooltip="ITALIC"
									tooltipPosition="top-center"
								>
									<FormatItalic style={{cursor: 'pointer'}}/>
								</IconButton>
								<IconButton
									onClick={this._onUnderlineClick.bind(this)}
									tooltip="UNDERLINE"
									tooltipPosition="top-center"
								>
									<FormatUnderlined style={{cursor: 'pointer'}}/>
								</IconButton>
							</div>
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