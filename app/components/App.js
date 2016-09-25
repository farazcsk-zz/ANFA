import React, {Component} from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import TestCreator from './TestCreator';

injectTapEventPlugin();

class App extends Component {
	render() {
		return (
			<div>
				<TestCreator />
			</div>
		)
	}
}
export default App