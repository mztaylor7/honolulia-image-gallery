import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {'Image Gallery'}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));