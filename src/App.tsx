import { Button } from "./components/Button";
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <h1>Name Generator</h1>
      <Button color="primary" text="Male" onClick={() => console.log("male")} />
      <Button
        color="secondary"
        text="Female"
        onClick={() => console.log("female")}
      />
    </div>
  );
}

export default App;
