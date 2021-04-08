import type { NextApiRequest, NextApiResponse } from "next";
import { addPerson, editPerson, getDB } from "../../data/backend-util";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const db = getDB();
    res.status(200).json(db);
  } else if (req.method === "POST") {
    const { person } = req.body;
    addPerson(person);
    res.status(200).json(person);
  } else if (req.method === "PUT") {
    const { person } = req.body;
    editPerson(person);
    res.status(200).json(person);
  }
};
