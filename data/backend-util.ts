import fs from "fs";
import path from "path";
import { IDB } from "../types/backend-model";
import { IPerson } from "../types/model";

export function getDBPath() {
  return path.join(process.cwd(), "data", "db.json");
}
export function getDB(): IDB {
  const readDB = fs.readFileSync(getDBPath(), "utf-8");
  return JSON.parse(readDB);
}

export function addPerson(person: IPerson) {
  const db = getDB();
  const peoples = db.peoples;
  peoples.push(person);
  const newDB = {
    ...db,
    peoples,
  };
  fs.writeFileSync(getDBPath(), JSON.stringify(newDB));
}

export function editPerson(person: IPerson) {
  const db = getDB();
  const peoples = db.peoples;
  const newPeoples = peoples.map((_person) =>
    _person.id === person.id ? person : _person
  );
  const newDB = {
    ...db,
    peoples: newPeoples,
  };

  fs.writeFileSync(getDBPath(), JSON.stringify(newDB));
}
