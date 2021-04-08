import { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "../../data/backend-util";

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    //handle get requests
    const db = getDB();
  } else if (req.method === "POST") {
    //handle Post requests
  }
}
