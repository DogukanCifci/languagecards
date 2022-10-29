import { useState } from "react";

const Main = ({ element }) => {
  const [check, setCheck] = useState(true);
  //console.log(check);

  console.log(element);
  return (
    <div className="col" onClick={() => setCheck(!check)}>
      {check ? (
        <div className="cards">
          <img src={element.img} alt="" />
          <div className="cards-title">{element.name.toUpperCase()}</div>
        </div>
      ) : (
        <div className="col">
          <div className="cards">
            <ul>
              {element.options.map((a, index) => {
                return (
                  <li key={index}>
                    <span>🔹</span> {a}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
