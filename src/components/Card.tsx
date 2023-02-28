import "../styles/Card.css";
import { capitalized } from "../utils";

interface CardProps {
  //   yearBirth: string;
  //   gender: string;
  //   ethnicity: string;
  name: string;
  //   numberBabes: string;
  //   nameRank: string;
}

export const Card = ({
  //   yearBirth,
  //   gender,
  //   ethnicity,
  name,
}: //   numberBabes,
//   nameRank,
CardProps) => {
  return (
    <div className="card-container">
      <h2>
        Name: <b>{capitalized(name)}</b>
      </h2>
    </div>
  );
};
