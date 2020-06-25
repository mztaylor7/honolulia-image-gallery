import React from 'react';
import styled from 'styled-components';

import Modal from 'react-bootstrap/Modal';

const ModalHeader = (props) => {
  <Modal.Header closeButton>
    <Modal.Title>{props.house.address} | ${props.house.price.toLocaleString()} | {props.house.bed} Bed {props.house.bath} Baths</Modal.Title>
    <Buttons>Save</Buttons>
    <Buttons>Share</Buttons>
  </Modal.Header>

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
`

export default ModalHeader;