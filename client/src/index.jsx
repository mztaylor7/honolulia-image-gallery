import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import BigThumb from './components/BigThumb.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      main: {},
      list: []
    }
  }

  componentDidMount() {
    axios.get('/picture/bigThumb')
      .then((thumbnail) => {
        this.setState({
          main: thumbnail.data
        });
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }

  handleClick(e) {

  }

  render() {
    return (
      <div>
        <BigThumb thumb={this.state.main} clicked={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));