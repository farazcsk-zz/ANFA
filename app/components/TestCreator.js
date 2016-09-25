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
	  	wrongAnswer1: '',
	  	wrongAnswer2: '',
	  	wrongAnswer3: ''
	  };

	  this.onQuestionChange = this.onQuestionChange.bind(this);
	  this.onAnswerChange = this.onAnswerChange.bind(this);
	  this.onWrongChange1 = this.onWrongChange1.bind(this);
	  this.onWrongChange2 = this.onWrongChange2.bind(this);
	  this.onWrongChange3 = this.onWrongChange3.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);

	}

	onQuestionChange(e) {
		this.setState({question: e.target.value});
	}

	onAnswerChange(e) {
		this.setState({answer: e.target.value});
	}

	onWrongChange1(e) {
		this.setState({wrongAnswer1: e.target.value});
	}
	
	onWrongChange2(e) {
		this.setState({wrongAnswer2: e.target.value});
	}
	
	onWrongChange3(e) {
		this.setState({wrongAnswer3: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
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
					          				<TextField id="wrong1" placeholder="Enter Wrong Answer" onChange={this.onWrongChange1}/>
					          			
				          					<TextField id="wrong2" placeholder="Enter Wrong Answer" onChange={this.onWrongChange2}/>

					          				<TextField id="wrong3" placeholder="Enter Wrong Answer" onChange={this.onWrongChange3}/>
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