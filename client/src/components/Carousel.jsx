import React from 'react';
import styled from 'styled-components';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: this.props.caroImage
    }
  }



  render() {
    return (
      <CaroCon>
        <Picture>
          <img src={this.state.currentSlide}/>
        </Picture>
      </CaroCon>
    )
  }
}

const CaroCon = styled.div`
  align-items: center;
  display: flex;
`

const Picture = styled.div`
    max-width: 100%;
    max-height: 100%;
  `;

export default Carousel;