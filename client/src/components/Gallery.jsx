import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // layout(images) {
  //   var num = images.length;
  //   var items = [];

  //   for (var i = 0; i < images.length; i++) {
  //     if (images.length - i < 3) {
  //       if (images.length - i < 2) {
  //         let lastImage = `
  //         <div style="grid-column: 1/7;">
  //           <img scr="${images[i]}">
  //         </div>
  //         `;
  //         return items.push(lastImage);
  //       } else {
  //         let nextToLast = `
  //         <div style="grid-column: 1/4;">
  //           <img scr="${images[i]}">
  //         </div>
  //         `;
  //         let lastImage = `
  //         <div style="grid-column: 4/7;">
  //           <img scr="${images[i + 1]}">
  //         </div>
  //         `;
  //         return items.push(nextToLast, lastImage);
  //       }
  //     }

  //   }
  // }




  render() {
    return (
      <Container>

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
    width: 100%;
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








