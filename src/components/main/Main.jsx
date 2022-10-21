import "./Main.css";
const Main = ({ data }) => {
  return (
    <div className="main-container">
      <h1>Languages</h1>
      <div className="row">
        {data.map((e, index) => {
          const { name, img } = e;
          return (
            <div className="cards" key={index}>
              <img src={img} alt="" />
              <div className="cards-title">{name.toUpperCase()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Main;
