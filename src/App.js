import Header from "./components/header/Header";
import Item from "./components/item/Item";

import dataa from "./data";
import "./App.css";

function App() {
  console.log(dataa);

  return (
    <div>
      <Header />
      <Item data={dataa} />
    </div>
  );
}

export default App;
