import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
      {props.data.map((planetName,index) => {
        return (
          <Link to={"/" + planetName.name} key={index}>
            <div style={{ background: "orange" }}>{planetName.name}</div>
          </Link>
        );
      })}
    </>
  );
};

export default Menu;
