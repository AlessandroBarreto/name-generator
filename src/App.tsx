import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { usePerson } from "./hooks/usePerson";
import "./styles/globals.css";

function App() {
  const { getRandonPerson, randonPerson } = usePerson();
  const shouldCardRender = randonPerson.length > 0;

  return (
    <div className="App">
      <h1>Name Generator</h1>
      <div className="button-container">
        <Button
          color="primary"
          text="Male"
          onClick={() => getRandonPerson("MALE")}
        />
        <Button
          color="secondary"
          text="Female"
          onClick={() => getRandonPerson("FEMALE")}
        />
      </div>
      {shouldCardRender && <Card name={randonPerson[3]} />}
    </div>
  );
}

export default App;
