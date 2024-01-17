import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Main = (props) => {
  const { data } = props;
  const { name: itemNameParam } = useParams();
  const [show, setShow] = useState("Overview");

  let itemName;

  if (itemNameParam) {
    itemName = data.find((item) => item.name === itemNameParam);
  }

  const handleShow = (param) => {
    setShow(param);
  };

  const showText = () => {
    switch (show) {
      case "Structure":
        return {
          text: itemName.structure.content,
          source: itemName.structure.source,
          image: itemName.images.internal,
        };
      case "Surface":
        return {
          text: itemName.geology.content,
          source: itemName.geology.source,
          image: itemName.images.planet,
          secondaryImg: itemName.images.geology,
        };
      default:
        return {
          text: itemName.overview.content,
          source: itemName.overview.source,
          image: itemName.images.planet,
        };
    }
  };

  if (itemName) {
    return (
      <main>
        <InformationDiv>
          <Txt state={false} onClick={() => handleShow()}>OVERVIEW</Txt>
          <Txt onClick={() => handleShow("Structure")}>Structure</Txt>
          <Txt onClick={() => handleShow("Surface")}>Surface</Txt>
        </InformationDiv>
        <MainBorderdiv
          style={{
            height: "1px",
            opacity: "0.2",
            background: "#FFF",
          }}
        ></MainBorderdiv>
        <PlanetTxtDiv>
          <ImgDiv>
            <MainImg src={showText().image} alt={`${itemName.name} ${show}`} />
            <SecondaryImg
              src={show === "Surface" ? showText().secondaryImg : null}
            />
          </ImgDiv>

          <AllInf>
            <MainTxtDiv>
              <H1>{itemName.name}</H1>
              <MainTxt>{showText().text}</MainTxt>
              <Source>
                <Sourcep>
                  Source : <A href={showText().source}>Wikipedia</A>
                </Sourcep>
                <img
                  style={{ marginLeft: "4px" }}
                  src="src/assets/icon-source.svg"
                />
              </Source>
            </MainTxtDiv>
            <InformationDivDesktop>
              <InfDiv onClick={() => handleShow()}>
                <TxtDesktop>
                  <span style={{ opacity: "0.5", marginRight: "17px " }}>
                    01
                  </span>
                  OVERVIEW
                </TxtDesktop>
              </InfDiv>
              <InfDiv onClick={() => handleShow("Structure")}>
                <TxtDesktop>
                  <span
                    className="first"
                    style={{ opacity: "0.5", marginRight: "14px " }}
                  >
                    02
                  </span>
                  Structure
                </TxtDesktop>
              </InfDiv>
              <InfDiv onClick={() => handleShow("Surface")}>
                <TxtDesktop>
                  <span style={{ opacity: "0.5", marginRight: "14px " }}>
                    03
                  </span>
                  Surface
                </TxtDesktop>
              </InfDiv>
            </InformationDivDesktop>
          </AllInf>
        </PlanetTxtDiv>
        <Footer>
          <FooterDiv>
            <FooterP>ROTATION TIME</FooterP>
            <FooterTxt>{itemName.rotation}</FooterTxt>
          </FooterDiv>
          <FooterDiv>
            <FooterP>REVOLUTION TIME</FooterP>
            <FooterTxt>{itemName.revolution}</FooterTxt>
          </FooterDiv>
          <FooterDiv>
            <FooterP>radius</FooterP>
            <FooterTxt>{itemName.radius}</FooterTxt>
          </FooterDiv>
          <FooterDiv>
            <FooterP>AVERAGE TEMP.</FooterP>
            <FooterTxt>{itemName.temperature}</FooterTxt>
          </FooterDiv>
        </Footer>
      </main>
    );
  }
};

export default Main;

const PlanetTxtDiv = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    margin-top: 126px;
    padding-right: 165px;
  }
`;

const AllInf = styled.div`
  display: flex;
  padding: 0px 40px;
  align-items: center;
  @media (min-width: 1440px) {
    flex-direction: column;
    padding: 0px;
    align-items: normal;
  }
`;

const MainTxtDiv = styled.div``;

const InfDiv = styled.div`
  padding: 7px 0px 8px 20px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 40px;
  @media (min-width: 768px) {
    min-width: 281px;
  }
  @media (min-width: 1440px) {
    height: 48px;
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: blue;
  }
`;

const TxtDesktop = styled.p`
  color: #fff;
  font-family: "League Spartan", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.929px;
  text-transform: uppercase;
  @media (min-width: 1440px) {
    font-size: 12px;
    letter-spacing: 2.571px;
  }
`;

const InformationDivDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    &:after:hover {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    margin-top: 39px;
  }
`;

const SecondaryImg = styled.img`
  display: block;
`;

const MainImg = styled.img`
  display: block;
`;

const InformationDiv = styled.div`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Txt = styled.p`
  color: #fff;
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.929px;
  text-transform: uppercase;
  position: relative;
  &:after {
    content: "";
    width: calc(100% + 1px);
    height: 4px;
    background-color: ${(props) => (props.state ? "red" : "blue")};
    display: none;
    position: absolute;
    margin-top: 17px;
  }
  &:hover:after {
    display: block;
  }
`;

const ImgDiv = styled.div`
  height: 304px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    height: 460px;
  }
  @media (min-width: 1440px) {
    min-width: 925px;
    height: auto;
  }
`;

const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-family: "Antonio";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 48px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
  }
`;

const MainTxt = styled.p`
  margin: 16px 24px 0px 24px;
  color: #fff;
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  @media (min-width: 768px) {
    text-align: left;
    margin: 24px 69px 0px 0px;
    min-width: 339px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
    margin: 23px 0px 0px 0px;
  }
`;

const Source = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  @media (min-width: 768px) {
    justify-content: start;
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    margin-top: 24px;
  }
`;

const Sourcep = styled.p`
  color: #fff;
  font-family: "League Spartan";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;

const A = styled.a`
  color: #fff;
  font-weight: 700;
  text-decoration-line: underline;
`;

const Footer = styled.div`
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  @media (min-width: 768px) {
    display: grid;
    flex-direction: row;
    grid-template-columns: auto auto auto auto;
    padding: 27px 40px;
    gap: 11px;
    @media (min-width: 1440px) {
      margin-top: 87px;
      padding: 0 165px;
    }
  }
`;
const FooterDiv = styled.div`
  padding: 9px 24px 13px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  @media (min-width: 768px) {
    flex-direction: column;
    padding: 16px 69px 19px 15px;
    align-items: start;
    gap: 6px;
    height: 88px;
  }
  @media (min-width: 1440px) {
    display: block;
    height: 128px;
    min-width: 255px;
    padding: 20px 0px 27px 23px;
  }
`;
const FooterP = styled.p`
  color: #fff;
  font-family: "League Spartan";
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.727px;
  text-transform: uppercase;
  opacity: 0.5;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    font-size: 11px;
  }
`;

const FooterTxt = styled.p`
  color: #fff;
  font-family: "Antonio";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    margin-top: 4px;
  }
`;

const MainBorderdiv = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
