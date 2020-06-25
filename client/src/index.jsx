import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import "bootstrap/scss/bootstrap.scss";
import styles from './styles.scss';

import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalDialog from 'react-bootstrap/ModalDialog';

import BigThumb from './components/BigThumb.jsx';
import Gallery from './components/Gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      main: '',
      list: [],
      modalIsOpen: false
    }
  }

  layout(images, min, max) {
    let result = [[images[0]]];
    let random;
    let i = 1;

    while (i < images.length) {
      random = Math.floor(Math.random() * (max - min)) + min;
      result.push(images.slice(i, i + random));
      i += random;
    }

    if (result.some(j => j.length < min)) {
      return layout(images, min, max);
    } else {
      return result;
    }
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  componentDidMount() {
    axios.get('/picture/bigThumb')
      .then((house) => {
        this.setState({
          main: house.data.bigThumb
        });
        return this.layout(house.data.images, 1, 4)
      })
      .then((house) => {
        console.log('house array: ', house)
        this.setState({
          list: house
        });
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }

  handleClick(e) {
    this.toggleModal();
  }

  render() {
    return (
      <div>
        <div>
          <BigThumb thumb={this.state.main} clicked={this.handleClick.bind(this)}/>
        </div>
        <Modal id="modal" show={this.state.modalIsOpen} onHide={this.toggleModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>3859 Owena St | $3,007,212 | 1 Bed 3 Baths</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal-body">
            <Gallery images={this.state.list} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));