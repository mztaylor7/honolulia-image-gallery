import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col, Image } from 'react-bootstrap'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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




  render() {
    return (
      <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
        {this.props.images.map(imageRow => (
          <Row>
            {imageRow.map(imageCol => (
                <Col style={{paddingLeft: 0, paddingRight: 0}}>
                  <Picture>
                    <img src={imageCol} className="gallery-image" />
                  </Picture>
                </Col>
              ))
            }
          </Row>
        ))}
      </Container>
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








