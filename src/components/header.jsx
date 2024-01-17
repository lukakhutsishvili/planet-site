import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const { data } = props;
  return (
    <>
      <HeaderDiv>
        <HeaderTxt>THE PLANETS</HeaderTxt>
        <Link to={"/menu"}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </Svg>
        </Link>
        <Menu>
          {data.map((planetName) => {
            return (
              <StyledLink to={"/" + planetName.name} key={planetName.name}>
                <PlanetName>{planetName.name}</PlanetName>
              </StyledLink>
            );
          })}
        </Menu>
      </HeaderDiv>
      <div style={{ height: "1px", opacity: "0.2", background: "#FFF" }}></div>
    </>
  );
};

export default Header;

const HeaderDiv = styled.header`
  margin: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: block;
    margin: 32px 20px 27px 20px;
  }
  @media (min-width: 1440px) {
    display: flex;
    margin: 20px 32px 27px 32px;
  }
`;

const HeaderTxt = styled.h2`
  color: #fff;
  font-family: Antonio;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Svg = styled.svg`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    column-gap: 33px;
    align-items: center;
    justify-content: center;
    margin-top: 39px;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

const PlanetName = styled.p`
  color: #fff;
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  @media (min-width: 768px) {
    &:after {
      content: "";
      width: calc(100% + 1px);
      height: 4px;
      background-color: white;
      display: none;
      position: absolute;
      margin-top: 23px;
    }
    &:hover:after {
      display: block;
    }
  }
  @media (min-width: 1440px) {
    &:after {
      margin-top: 0px;
      top: -25.2px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

