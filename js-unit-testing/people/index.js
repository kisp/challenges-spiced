const formatFullName = (person) => `${person.firstName} ${person.lastName}`;
const formatLastName = (person) => `${person.lastName}`;
const formatLastNameAge = (person) => `${person.lastName} (${person.age})`;

export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map(formatFullName);
}

export function getNameAndAge(people) {
  return people.map(formatLastNameAge);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  return people.filter((person) => person.age > age).map(formatFullName);
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getLastNamesSortedByAge(people) {
  return people.sort((a, b) => a.age - b.age).map(formatLastName);
}
