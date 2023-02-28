import { useEffect, useState } from "react";
import { personsData } from "../assets/persons";
import { Gender, filterPersonsByGender, Persons } from "../utils";

export const usePerson = () => {
  const [persons, setPersons] = useState<Persons>([]);
  const [randonPerson, setRandomPerson] = useState<string[]>([]);

  const getRandonPerson = (gender: Gender) => {
    const filteredByGender = filterPersonsByGender(gender, persons);
    const randomIndex = Math.floor(Math.random() * filteredByGender.length);
    setRandomPerson(filteredByGender[randomIndex]);
  };

  // future request here
  useEffect(() => {
    setPersons(personsData);
  }, []);

  return { getRandonPerson, randonPerson };
};
