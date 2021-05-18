import { db } from "../../utils/firebase";
import keyGenerator from "../../utils/keyGenerator";

//this api creates a unique key and sends longurl taken from user with this unique key to db

export default async (req, res) => {
  if (req.method == "POST") {
    const key = keyGenerator(5);
    const { longUrl } = req.body;
    await db.doc(`shorten/${key}`).set({
      longUrl,
    });
    res.json({ longUrl, key });
  }
};
