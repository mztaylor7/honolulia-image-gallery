import React from 'react';
import styled from 'styled-components';

import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalDialog from 'react-bootstrap/ModalDialog';

import { Container, Row, Col, Image } from 'react-bootstrap'

import Carousel from './Carousel.jsx';


class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carModalIsOpen: false,
      caroImage: ''
    }
  }

  // layout(images, min, max) {
  //   let result = [[images[0]]];
  //   let random;
  //   let i = 1;

  //   while (i < images.length) {
  //     random = Math.floor(Math.random() * (max - min)) + min;
  //     result.push(images.slice(i, i + random));
  //     i += random;
  //   }

  //   if (result.some(j => j.length < min)) {
  //     return layout(images, min, max);
  //   } else {
  //     return result;
  //   }
  // }

  handleClick(e) {
    var image = e.target.src;
    this.setState({
      caroImage: image
    }, () => {
      this.toggleModal();
    })
  }

  toggleModal() {
    this.setState({
      carModalIsOpen: !this.state.carModalIsOpen
    });
  }


  render() {
    return (
      <React.Fragment>
        <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
          {this.props.images.map((imageRow, key) => (
            <Row key={key}>
              {imageRow.map((imageCol, key) => (
                <Col key={key} style={{paddingLeft: 0, paddingRight: 0}}>
                    <Picture >
                      <img src={imageCol} className="gallery-image" onClick={this.handleClick.bind(this)} />
                    </Picture>
                  </Col>
                ))
              }
            </Row>
          ))}
        </Container>
        <Modal id="modal" show={this.state.carModalIsOpen} onHide={this.toggleModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Photos
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal-body-carol">
            <Carousel caroImage={this.state.caroImage} imagesArray={this.props.imagesArray}/>
          </Modal.Body>
        </Modal>
      </React.Fragment>
      )
    }
  }

  const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px;
  position: relative;

  `;
  const GridContainer = styled.div`
  overflow: hidden;

  `;

  const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    padding-bottom: 8px;
    gap: 8px;
    `;

  const Picture = styled.div`
    max-width: 100%;
    max-height: 100%;
    margin: 4px;
    display: flex;
    justify-content: center;
  `;

    // <FlexContainer>
    //   <GridContainer>
    //     <GridWrapper>
    //       {this.props.images.map((image, key) => {
    //         return (
    //           <React.Fragment key={key}>
    //             <Picture>
    //               <img src={image}/>
    //             </Picture>
    //           </React.Fragment>
    //         )
    //       })}
    //     </GridWrapper>
    //   </GridContainer>
    // </FlexContainer>

export default Gallery;








