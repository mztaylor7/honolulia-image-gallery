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
          <img id="carol-image" src={this.state.currentSlide}/>
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
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
  `;

export default Carousel;