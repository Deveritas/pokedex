import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    onRedirect: dispatch({ type: 'REDIRECT' })
});

class App extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.context.router.replace(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          { this.props.children }
      </div>
    );
  }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
