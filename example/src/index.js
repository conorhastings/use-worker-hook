import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

class X extends React.Component {
  constructor() {
    super();
    this.state = { a: [1, 2], b: [3, 4] };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ b: [9, 11]})
    }, 2000);
  }
  render() {
    return <App a={this.state.a} b={this.state.b} />
  }
}
ReactDOM.render(<X />, document.getElementById('root'));