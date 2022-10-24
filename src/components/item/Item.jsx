import "../main/Main.css";
import Main from "../main/Main";
const Item = ({ data }) => {
  console.log(data);
  return (
    <div className="main-container">
      <h1>Languages</h1>
      <div className="row">
        {data.map((veri, index) => {
          return <Main element={veri} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Item;
