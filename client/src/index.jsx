import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';

import BigThumb from './components/BigThumb.jsx';
import Gallery from './components/Gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      main: {},
      list: [],
      modalIsOpen: false
    }
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  componentDidMount() {
    axios.get('/picture/bigThumb')
      .then((thumbnail) => {
        console.log(thumbnail);
        this.setState({
          main: thumbnail.data
        });
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }

  handleClick(e) {
    axios.get('/picture/bigThumb/list')
      .then((images) => {
        this.setState({
          list: images.data
        });
      })
      .then(() => {
        this.toggleModal();
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <BigThumb thumb={this.state.main} clicked={this.handleClick.bind(this)}/>
        </div>
        <Modal show={this.state.modalIsOpen} onHide={this.toggleModal.bind(this)}>
          <Modal.Body>
            <Gallery images={this.state.list}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));