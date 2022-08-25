import React, { Component } from "react";
import { connect } from "react-redux";

class Counter2 extends Component {
	render() {
		return <div>counter2</div>;
	}
}

const mapStateToProps = (state) => {
	console.log("state", state);
};

const mapDispatchToProps = (a) => {
	console.log("a", a);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
