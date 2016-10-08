import React, {Component} from "react";
import SectionCreator from './sectionCreator';
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Worksheet extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	Worksheet: {
	  		sections: []
	  	}
	  };

	  this.sectionAdded = this.sectionAdded.bind(this);
	}

	componentDidMount() {
		$.ajax({
      		url: "http://localhost:3000/api/Worksheets/" + this.props.params.id +"?filter=%7B%22include%22%3A%7B%22relation%22%3A%22sections%22%7D%7D&access_token=TbZ4UnDIN1jbRJ1xzVf5mTbEGkjR2kXZjEEeYVqiwHIwgytpFsjYCklHdIrzxBCW",
      		dataType: 'json',
      		success: function(data) {
        		this.setState({Worksheet: data});
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error('#GET Error', status, err.toString());
      		}.bind(this)
    	});
	}

	sectionAdded() {
		$.ajax({
      		url: "http://localhost:3000/api/Worksheets/" + this.props.params.id +"?filter=%7B%22include%22%3A%7B%22relation%22%3A%22sections%22%7D%7D&access_token=TbZ4UnDIN1jbRJ1xzVf5mTbEGkjR2kXZjEEeYVqiwHIwgytpFsjYCklHdIrzxBCW",
      		dataType: 'json',
      		success: function(data) {
        		this.setState({Worksheet: data});
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error('#GET Error', status, err.toString());
      		}.bind(this)
    	});
	}
	render() {

		const paperStyle = {
		  height: '100vh',
		  width: 'inherit',
		  margin: 20,
		  padding: 10,
		  display: 'inline-block',
		  border: '2px solid #36BA93'
		};

		const buttonStyles = {
			backgroundColor: 'transparent',
			rippleColor: '#36BA93',
			labelStyle: {
				color: '#36333C',
			}
		}

		const borderStyle = {
			border: '2px solid #36BA93',
			marginTop: '2.5vh',
			marginLeft: '5vw',
			width: 'inherit'
		}


		const sectionBorderStyle = {
			border: '2px solid #36BA93',
			
		}

		const redButtonStyles = {
			backgroundColor: 'transparent',
			rippleColor: '#D0021B',
			labelStyle: {
				color: '#36333C',
			}
		}

		const redBorderStyle = {
			border: '2px solid #D0021B',
			marginTop: '0.5vh',
			marginLeft: '5vw',
			width: 'inherit'
		}
		const hrStyle = {
			border: '2px solid #36333C'
		}

		var sections = this.state.Worksheet.sections.map(function(section) {
			return (
				<Card key={section.id}>
				    <CardHeader
				      title={section.title}
				      subtitle={section.id}
				      actAsExpander={true}
				      showExpandableButton={true}
				    />
				    <CardActions>
				    </CardActions>
				    <CardText expandable={true}>
				      <h1>{section.number}</h1>
				    </CardText>
 				</Card>
      		); 
		});

		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col md={12}>
							<MuiThemeProvider>
								<Paper style={paperStyle}>
									<Row className="show-grid">
										<Col md={9}>
											<h3>{this.state.Worksheet.title}</h3>
											<hr style={hrStyle} />
											<h6 style={{marginBottom: '10vh'}}>{this.state.Worksheet.description}</h6>
											<Row className="show-grid">
												<Col md={9}>
													<h3>Sections</h3>
												</Col>
												<Col md={3}>
													<SectionCreator worksheetId={this.state.Worksheet.id} number={this.state.Worksheet.sections.length + 1} sectionAdded={this.sectionAdded}/>
												</Col>
											</Row>
											
											<hr style={hrStyle} />
										    {sections}
											
										</Col>
										<Col md={3}>
											<FlatButton 
												label="Edit"
												style={borderStyle}
												rippleColor={buttonStyles.rippleColor} 
												backgroundColor={buttonStyles.backgroundColor} 
												labelStyle={buttonStyles.labelStyle}
												hoverColor={buttonStyles.backgroundColor}  
											/>
											<FlatButton 
												label="Delete"
												style={redBorderStyle}
												rippleColor={redButtonStyles.rippleColor} 
												backgroundColor={redButtonStyles.backgroundColor} 
												labelStyle={redButtonStyles.labelStyle}
												hoverColor={redButtonStyles.backgroundColor}  
											/>
										</Col>
									</Row>
								</Paper>
							</MuiThemeProvider>
						</Col>	
					</Row>	
				</Grid>
			</div>
		)
	}
}
export default Worksheet