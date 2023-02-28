import { Button } from "./components/Button";
import { Card } from "./components/Card";
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
      <Card name="alessadro" />
    </div>
  );
}

export default App;
