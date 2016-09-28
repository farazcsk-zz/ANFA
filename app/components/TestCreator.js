import React, {Component} from "react";
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class TestCreator extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	question: '',
	  	answer: '',
	  	wrongAnswers: ['', '', '']
	  };

	  this.onQuestionChange = this.onQuestionChange.bind(this);
	  this.onAnswerChange = this.onAnswerChange.bind(this);
	  this.onWrongChange = this.onWrongChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);


	}

	onQuestionChange(e) {
		this.setState({question: e.target.value});
	}

	onAnswerChange(e) {
		this.setState({answer: e.target.value});
	}

	onWrongChange(e) {
		if (e.target.id === 'wrongAnswer1') {
			this.setState({wrongAnswers: [e.target.value, this.state.wrongAnswers[1], this.state.wrongAnswers[2]]});
		} else if (e.target.id === 'wrongAnswer2') {
			this.setState({wrongAnswers: [this.state.wrongAnswers[0], e.target.value, this.state.wrongAnswers[2]]});
		} else {
			this.setState({wrongAnswers: [this.state.wrongAnswers[0], this.state.wrongAnswers[1], e.target.value]});
		}
	}
	
	handleSubmit(e) {
		console.log(this.state)
		e.preventDefault();
		$.ajax({
	      url: "http://localhost:3000/api/Tests",
	      dataType: 'json',
	      type: 'POST',
	      data: this.state,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
    	});
	}

	render() {
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col md={8} mdOffset={2}>
							<h1>Test Creator</h1>
							<MuiThemeProvider>
								<form>
									<Row className="show-grid">
										<Col md={12}>
				          					<TextField id="question" placeholder="Enter Question" onChange={this.onQuestionChange}/>
				          				</Col>
				          			</Row>
				          			<br />
				          			<br />
				          			<br />
				          			<Row className="show-grid">
				          				<Col md={6}>
				          					<TextField id="answer" placeholder="Enter Answer" onChange={this.onAnswerChange}/>
										</Col>

										<Col md={6}>
					          				<TextField id="wrongAnswer1" placeholder="Enter Wrong Answer" onChange={this.onWrongChange}/>
					          			
				          					<TextField id="wrongAnswer2" placeholder="Enter Wrong Answer" onChange={this.onWrongChange}/>

					          				<TextField id="wrongAnswer3" placeholder="Enter Wrong Answer" onChange={this.onWrongChange}/>
				          				</Col>
			          				</Row>
				          			
									<RaisedButton label="Create" onClick={this.handleSubmit} />
				        		</form>
			        		</MuiThemeProvider>
	        			</Col>
					</Row>
	    		</Grid>
			</div>
		)
	}
}
export default TestCreator