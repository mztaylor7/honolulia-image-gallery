import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import "bootstrap/scss/bootstrap.scss";
import styles from './styles.scss';
import styled from 'styled-components';

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
      galModalIsOpen: false,
      houseStats: {},
      imagesArray: []
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
      galModalIsOpen: !this.state.galModalIsOpen
    });
  }

  componentDidMount() {
    axios.get('/picture/bigThumb')
      .then((house) => {
        this.setState({
          main: house.data.bigThumb,
          houseStats: {
            address: house.data.address,
            price: house.data.price.toLocaleString(),
            beds: house.data.beds,
            baths: house.data.baths,
          },
          imagesArray: house.data.images
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
    console.log(this.state.imagesArray)
  }


  render() {


    return (
      <div>
        <div>
          <BigThumb thumb={this.state.main} clicked={this.handleClick.bind(this)}/>
        </div>
        <Modal id="modal" show={this.state.galModalIsOpen} onHide={this.toggleModal.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.houseStats.address} | ${this.state.houseStats.price} | {this.state.houseStats.beds} Beds {this.state.houseStats.baths} Baths</Modal.Title>
        </Modal.Header>
          <Modal.Body id="modal-body">
            <Gallery images={this.state.list} imagesArray={this.state.imagesArray}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const Buttons = styled.button`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(59, 65, 68);
  background-color: rgb(255, 255, 255);
  margin: 0px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  padding: 8px 16px;
  border-color: rgb(205, 209, 212);
  float: right;
`
const ButtonHolder = styled.div`
  float: right;
`

ReactDOM.render(<App />, document.getElementById('app'));