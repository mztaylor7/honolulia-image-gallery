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

  // Breaks up images array into an array of arrays in sizes of 1 to 3. This is to
  // generate the layout of the images for the gallery when mapping in gallery
  // component
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
    var urlParams = new URLSearchParams(window.location.search);
    var myId = urlParams.get('id');
    axios.get(`http://127.0.0.1:8001/picture/bigThumb/${myId}`)
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
        <HeroCon>
          <BigThumb thumb={this.state.main} clicked={this.handleClick.bind(this)} imagesArray={this.state.imagesArray}/>
        </HeroCon>
        <Modal id="modal" show={this.state.galModalIsOpen} onHide={this.toggleModal.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.houseStats.address} | ${this.state.houseStats.price} | {this.state.houseStats.beds} Beds {this.state.houseStats.baths} Baths</Modal.Title>
          <ButtonHolder>
            <Buttons>
              <SvgHolder>
                <svg className="svg-caro" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="#869099"></path></svg>
                <ButtonText>Share</ButtonText>
              </SvgHolder>
            </Buttons>
            <Buttons>
              <SvgHolder>
                <svg className="svg-caro" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#869099"></path></svg>
                <ButtonText>Save</ButtonText>
              </SvgHolder>
            </Buttons>
          </ButtonHolder>
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
  margin-left: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  padding: 8px 16px;
  border-color: rgb(205, 209, 212);
  float: right;
  &:hover{
    background-color: rgb(239,239,239);
  }
  &:focus{
    outline-color: rgb(239,239,239);
  }
  min-width: 100px;
`
const ButtonHolder = styled.div`
  position: fixed;
  right: 100px
`
const SvgHolder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`
const ButtonText = styled.span`
  width: 100%;
  margin-left: 8px;
  flex: 1 1 0px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif!important;
`
const HeroCon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 500px;
  max-height: calc(100vh - 275px);
  min-height: 275px;
  overflow: hidden;
`

ReactDOM.render(<App />, document.getElementById('gallery'));