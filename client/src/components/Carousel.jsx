import React from 'react';
import styled from 'styled-components';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: this.props.caroImage
    }
  }

  leftClick() {
    var imagesArray = this.props.imagesArray
    var current = imagesArray.indexOf(this.state.currentSlide);
    var last = imagesArray[imagesArray.length - 1]
    var previous = imagesArray[current - 1]
    if (current === 0) {
      this.setState({
        currentSlide: last
      });
    } else {
      this.setState({
        currentSlide: previous
      });
    }
  }

  rightClick() {
    var imagesArray = this.props.imagesArray
    var current = imagesArray.indexOf(this.state.currentSlide);
    var first = imagesArray[0]
    var next = imagesArray[current + 1]
    if (current === imagesArray.length - 1) {
      this.setState({
        currentSlide: first
      });
    } else {
      this.setState({
        currentSlide: next
      });
    }
  }

  render() {
    return (
      <CaroCon>
        <Picture>
          <img id="carol-image" src={this.state.currentSlide}/>
        </Picture>
        <LeftButton onClick={this.leftClick.bind(this)}/>
        <RightButton onClick={this.rightClick.bind(this)}/>
      </CaroCon>
    )
  }
}

const CaroCon = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: center;
`

const Picture = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  outline: ${props => props.active  ? 'none!important' : 'none!important'};
  z-index: 4;
  position: absolute;
  top: calc(50% - 12px);
  display: flex;
  alight-items: center;
  justify-content: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  background-color: rgb(59, 65, 68);
  border-radius: 24px;
  padding: 1px;
  border-style: none;
`

const RightButton = styled(Button)`
  left: auto;
  right: 20px;
`;
const LeftButton = styled(Button)`
  left: 20px;
  right: auto;
`;
export default Carousel;