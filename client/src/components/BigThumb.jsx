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
            <HeroInfoHomeStatus>
              <HeroInfoSold>
                <span>SOLD</span>
              </HeroInfoSold>
              <HeroInfoDate>
                <span>DEC 13, 2019</span>
              </HeroInfoDate>
            </HeroInfoHomeStatus>
            <HeroInfoButtons>
              <HeroSave>
                <HeroButtonMedia>
                  <HeroButtonSvgCon>
                    <svg className="svg-caro" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#4e9ac0"></path></svg>
                  </HeroButtonSvgCon>
                  <HeroButtonSpanCon>
                    <span>Save</span>
                  </HeroButtonSpanCon>
                </HeroButtonMedia>
              </HeroSave>
              <HeroShare>
                <HeroButtonMedia>
                  <HeroButtonSvgCon>
                    <svg className="svg-caro" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="#4e9ac0"></path></svg>
                  </HeroButtonSvgCon>
                  <HeroButtonSpanCon>
                    <span>Share</span>
                  </HeroButtonSpanCon>
                </HeroButtonMedia>
              </HeroShare>
            </HeroInfoButtons>
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
`;

const PictureSmall = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  `;






const HeroInfoBanner = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  max-width: 992px;
  width: 100%;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  margin: auto;
`;


const HeroInfoHomeStatus = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  transform: translateY(-11px);
  flex: 1 1 0%;
`
const HeroInfoSold = styled.span`
  margin-right: 4px;
  text-transform: uppercase;
  background-color: rgb(255, 255, 255);
  color: rgb(255, 94, 63);
  font-size: 12px;
  line-height: 1.33;
  padding: 2px 4px;
  display: inline-flex;
  border-radius: 4px;
`
const HeroInfoDate = styled.span`
  margin-right: 4px;
  text-transform: uppercase;
  background-color: rgb(255, 255, 255);
  color: rgb(59, 65, 68);
  font-size: 12px;
  line-height: 1.33;
  padding: 2px 4px;
  display: inline-flex;
  border-radius: 4px;
`







const HeroInfoButtons = styled.div`
  display: block;
`
const HeroButtons = styled.div`
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
const HeroSave = styled(HeroButtons)`
  margin-bottom: 0;
  width: 100px;
`
const HeroShare = styled(HeroButtons)`
  margin-left: 16px;
  margin-bottom: 0;
  width: 110px;
`
const HeroButtonMedia = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
`
const HeroButtonSvgCon = styled.div`
  display: inline-block;
  font-size: 0px;
  width: 24px;
  height: 24px;
`
const HeroButtonSpanCon = styled.div`
  width: 100%;
  flex: 1 1 0px;
  margin: 0px 8px;
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
`;

  export default BigThumb;