import React from 'react';
import styled from 'styled-components';

const BigThumb = (props) => (
  <React.Fragments>
    <Sizer>
      <BigImgForeground>
        <BigImgBackground>
          <HeroGrid>
            <HeroGridMain>
              <Picture>

              </Picture>
            </HeroGridMain>
            <HeroGridTR>
              <Picture>

              </Picture>
            </HeroGridTR>
            <HeroGridBR>
              <Picture>

              </Picture>
            </HeroGridBR>
          </HeroGrid>
        </BigImgBackground>
        <HeroInfoBanner>

        </HeroInfoBanner>
        <HeroDetails>

        </HeroDetails>
      </BigImgForeground>
    </Sizer>
  <div className="thumbnail">
    <img src={props.thumb} className="main-image" onClick={props.clicked}/>
  </div>
  </React.Fragments>
)

const Sizer = styled.div`
  width: 992px;
`
const BigImgBackground = styled.div`
  width: 100%
  height: 100%
`
const BigImgForeground = styled.div`
  wdith: 992px;
  height: auto;
  postition: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
`
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
`
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
`
const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50% 50% 50%;
`
const HeroGridMain = styled.div`
  min-height: 300px;
  grid-row: 1 / 3;
  grid-column: 1 / 4;
  border-right: 8px solid rgb(255, 255, 255);
  // position: relative;
`
const HeroGridTR = styled.div`
  grid-row: 1 / 2;
  grid-column: 4 / 5;
  border-bottom: 8px solid rgb(255, 255, 255);
`
const HeroGridBR = styled.div`
  grid-row: 2 / 3;
  grid-column: 4 / 5;
`
const Picture = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  // position: relative for main image maybe....
`

export default BigThumb;