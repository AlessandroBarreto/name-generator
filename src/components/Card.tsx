import "../styles/Card.css";

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
        Name: <b>{name}</b>
      </h2>
      <h2>
        Name: <b>{name}</b>
      </h2>
    </div>
  );
};
