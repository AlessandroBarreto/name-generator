import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
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
