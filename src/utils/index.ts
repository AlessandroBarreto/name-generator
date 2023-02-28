export type Gender = "MALE" | "FEMALE";
export type Persons = string[][];

const filterPersonsByGender = (gender: Gender, persons: Persons): Persons => {
  return persons.filter((person) => {
    const personGender = person[1];
    return personGender === gender;
  });
};

const capitalized = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

export { filterPersonsByGender, capitalized };
