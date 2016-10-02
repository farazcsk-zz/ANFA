import React, {Component} from "react";

class Workout extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {

		return (
			<div>
				<h1>{this.props.params.id}</h1>
			</div>
		)
	}
}
export default Workout