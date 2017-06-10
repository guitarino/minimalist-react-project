import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {time: new Date().toLocaleTimeString()};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time}.</h2>
      </div>
    );
  }
};

export function renderTo(root) {
  ReactDOM.render(<App />, root);
};