import React from 'react';
import styled from 'styled-components';

const BigThumb = (props) => (
  <React.Fragment>
    <Sizer>
      <HeroImgTitle>
          <BigImgBackground>
            <HeroGrid>
              <HeroGridMain>
                <PictureMain>
                  <img id="hero-main" src={props.thumb}/>
                </PictureMain>
              </HeroGridMain>
              <HeroGridTR>
                <PictureSmall>
                  <img id="hero-tr" src={props.imagesArray[1]}/>
                </PictureSmall>
              </HeroGridTR>
              <HeroGridBR>
                <PictureSmall>
                  <img id="hero-br" src={props.imagesArray[2]}/>
                </PictureSmall>
              </HeroGridBR>
            </HeroGrid>
          </BigImgBackground>
          <HeroInfoBanner>

          </HeroInfoBanner>
          <HeroDetails>

          </HeroDetails>
      </HeroImgTitle>
    </Sizer>
  </React.Fragment>
  // <div className="thumbnail">
  //   <img src={props.thumb} className="main-image" onClick={props.clicked}/>
  // </div>
)

const Sizer = styled.div`
  width: 992px;
`;

const HeroImgTitle = styled.div`
  background-color: rgb(232, 233, 234);
  position: relative;
  cursor: pointer;
  width: 992px;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
`

const BigImgBackground = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
`;

const HeroInfoBanner = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  max-width: 992px;
  width: 100%;
  padding-top: 8px;
  padding-left: calc(env(safe-area-inset-left) + 8px);
  padding-right: calc(env(safe-area-inset-right) + 8px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  margin: auto;
`;
const HeroDetails = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  right: 0px;
  bottom: 8px;
  max-width: 992px;
  padding-left: calc(env(safe-area-inset-left) + 16px);
  padding-right: calc(env(safe-area-inset-right) + 8px);
  z-index: 1;
  margin: auto;
`;
const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50% 50% 50%;
`;
const HeroGridMain = styled.div`
  min-height: 300px;
  grid-row: 1 / 3;
  grid-column: 1 / 4;
  border-right: 8px solid rgb(255, 255, 255);
  // position: relative;
`;
const HeroGridTR = styled.div`
  grid-row: 1 / 2;
  grid-column: 4 / 5;
  border-bottom: 8px solid rgb(255, 255, 255);
`;
const HeroGridBR = styled.div`
  grid-row: 2 / 3;
  grid-column: 4 / 5;
`;
const PictureMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ::after {
    content: "";
    width: 8px;
    height: 100%;
    position: absolute;
    right: -8px;
    top: 0px;
    z-index: 50;
    background: white;
  };
  // position: relative;
`;

const PictureSmall = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  // position: relative for main image maybe....
`;

export default BigThumb;