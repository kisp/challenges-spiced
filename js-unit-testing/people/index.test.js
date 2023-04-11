import {
  getFirstNames,
  getFullNames,
  getNameAndAge,
  getPeopleByAge,
  getPeopleNamesOlderThan,
  getPeopleByLastName,
  findPersonById,
  isAnyoneOlderThan,
  getLastNamesSortedByAge,
} from "./index.js";

const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];

test("getFirstNames() returns an array with the first names", () => {
  expect(getFirstNames(people)).toEqual([
    "Jane",
    "John",
    "Max",
    "Erika",
    "Luke",
  ]);
});

test('getFullNames() returns an array with full names as strings, e.g. "Jane Doe"', () => {
  expect(getFullNames(people)).toEqual([
    "Jane Doe",
    "John Doe",
    "Max Mustermann",
    "Erika Musterfrau",
    "Luke Skywalker",
  ]);
});

test('getNameAndAge() returns an array of formatted strings like this: "Skywalker (23)"', () => {
  expect(getNameAndAge(people)).toEqual([
    "Doe (21)",
    "Doe (18)",
    "Mustermann (32)",
    "Musterfrau (38)",
    "Skywalker (23)",
  ]);
});

test("getPeopleByAge() returns an array of people of a certain age", () => {
  expect(getPeopleByAge(people, 100)).toEqual([]);
  expect(getNameAndAge(getPeopleByAge(people, 21))).toEqual(["Doe (21)"]);
  expect(getNameAndAge(getPeopleByAge(people, 23))).toEqual(["Skywalker (23)"]);
  expect(getNameAndAge(getPeopleByAge(people.concat(people), 23))).toEqual([
    "Skywalker (23)",
    "Skywalker (23)",
  ]);
});

test('getPeopleNamesOlderThan() returns an array of people full names older than a certain age, e.g. "Luke Skywalker"', () => {
  expect(getPeopleNamesOlderThan(people, 100)).toEqual([]);
  expect(getPeopleNamesOlderThan(people, 38)).toEqual([]);
  expect(getPeopleNamesOlderThan(people, 37)).toEqual(["Erika Musterfrau"]);
  expect(getPeopleNamesOlderThan(people, 31)).toEqual([
    "Max Mustermann",
    "Erika Musterfrau",
  ]);
});

test("getPeopleByLastName() returns an array of people of a certain lastName", () => {
  expect(getFullNames(getPeopleByLastName(people, "xxx"))).toEqual([]);
  expect(getFullNames(getPeopleByLastName(people, "Mustermann"))).toEqual([
    "Max Mustermann",
  ]);
});

// Hint: use Array.prototype.find for the implementation
test("findPersonById() returns the full object of a person", () => {
  expect(findPersonById(people, 1000)).toEqual(undefined);
  expect(findPersonById(people, 1)).toEqual(
    getPeopleByLastName(people, "Doe")[0]
  );
  expect(findPersonById(people, 5)).toEqual(
    getPeopleByLastName(people, "Skywalker")[0]
  );
});

// Hint: implementation should use Array.prototype.some
test("isAnyoneOlderThan() returns true if any person is older than the given age", () => {
  expect(isAnyoneOlderThan(people, 0)).toBeTruthy();
});

test("isAnyoneOlderThan() returns false if no person is older than the given age", () => {
  expect(isAnyoneOlderThan(people, 100)).toBeFalsy();
});

test("getLastNamesSortedByAge() returns an array of last names sorted by age", () => {
  expect(getLastNamesSortedByAge([])).toEqual([]);
  expect(getLastNamesSortedByAge([people[0]])).toEqual([people[0].lastName]);
  expect(getLastNamesSortedByAge([people[0], people[1]])).toEqual([
    people[1].lastName,
    people[0].lastName,
  ]);
  expect(getLastNamesSortedByAge([people[3], people[4]])).toEqual([
    people[4].lastName,
    people[3].lastName,
  ]);
});
