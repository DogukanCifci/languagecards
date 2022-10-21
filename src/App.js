import Header from "./components/header/Header";
import "./App.css";
import Main from "./components/main/Main";
import dataa from "./data";
function App() {
  console.log(dataa);
  return (
    <div>
      <Header />
      <Main data={dataa} />
    </div>
  );
}

export default App;
