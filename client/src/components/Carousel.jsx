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
        <LeftButton onClick={this.leftClick.bind(this)}>
          <SvgDiv>
            <svg className="svg-caro" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#ddd"></path></svg>
          </SvgDiv>
        </LeftButton>
        <RightButton onClick={this.rightClick.bind(this)}>
          <SvgDiv>
            <svg className="svg-caro" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#ddd"></path></svg>
          </SvgDiv>
          </RightButton>
      </CaroCon>
    )
  }
}

const CaroCon = styled.div`
  display: flex;
  align-items: middle;
  justify-content: center;
`

const Picture = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  // outline: ${props => props.active  ? 'none!important' : 'none!important'};
  z-index: 4;
  position: absolute;
  top: calc(50% - 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  background-color: rgb(59, 65, 68);
  border-radius: 24px;
  padding: 1px;
  border-style: none;
  transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
  &:hover {
    background-color: rgb(170, 170, 170);
  }
`

const RightButton = styled(Button)`
  left: auto;
  right: 20px;
`;
const LeftButton = styled(Button)`
  left: 20px;
  right: auto;
`;

const SvgDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
`

// &:hover {
//   background-color: rgb(255, 255, 255);
//   color: rgb(217, 60, 35);
// }

export default Carousel;