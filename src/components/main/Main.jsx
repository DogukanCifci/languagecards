import { useState } from "react";
import "./Main.css";
const Main = ({ data }) => {
  const [check, setCheck] = useState(true);
  console.log(check);
  return (
    <div className="main-container">
      <h1>Languages</h1>
      <div className="row">
        <div className="col" onClick={() => setCheck(!check)}>
          {data.map((e, index) => {
            return check ? (
              <div className="cards" key={index}>
                <img src={e.img} alt="" />
                <div className="cards-title">{e.name.toUpperCase()}</div>
              </div>
            ) : (
              <div className="cards" key={index}>
                <ul>
                  <li>{e.options[0]}</li>
                  <li>{e.options[1]}</li>
                  <li>{e.options[2]}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Main;
