import "../styles/Card.css";
import { capitalized } from "../utils";

interface CardProps {
  randonPerson: string[];
}

export const Card = ({ randonPerson }: CardProps) => {
  const [Year, Gender, Ethnicity, Name, Babes, Rank] = randonPerson;
  const personObj = { Name, Gender, Ethnicity, Year, Babes, Rank };

  return (
    <div className="card-container">
      {Object.entries(personObj).map((info) => {
        const key = info[0];
        const value = info[1];

        return (
          <h2>
            {key}: <b>{capitalized(value)}</b>
          </h2>
        );
      })}
    </div>
  );
};
