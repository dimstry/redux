import { AddKontak } from "./components";
import ListKontak from "./components/listkontak";

function App() {
  return (
    <div className="App" style={{ padding: "30px" }}>
      <h3>Applikkasi List Kontak</h3>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
