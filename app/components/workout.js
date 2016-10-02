import React, {Component} from "react";
import $ from "jquery";

class Workout extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	workout: {}
	  };
	}

	componentDidMount() {
		$.ajax({
      		url: "http://localhost:3000/api/Workouts/" + this.props.params.id + "?access_token=iTk6s6Boej92VgEFrKNnvg4rqD1uXjZmAUoNtHKgIqOwxi0LpnEToMK8SKYcjXuC",
      		dataType: 'json',
      		success: function(data) {
        		this.setState({workout: data});
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error('#GET Error', status, err.toString());
      		}.bind(this)
    	});
	}
	render() {

		return (
			<div>
				<h1>{this.state.workout.title}</h1>
			</div>
		)
	}
}
export default Workout