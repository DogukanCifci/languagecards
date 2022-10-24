import Header from "./components/header/Header";
import "./App.css";

import dataa from "./data";
import Item from "./components/item/Item";
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
