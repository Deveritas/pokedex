import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    hello: state.common.test
});

class Home extends React.Component {
    render() {
        return (
            <p className="App-intro">
                {this.props.hello}
            </p>
        )
    }
}

export default connect(mapStateToProps, {})(Home);