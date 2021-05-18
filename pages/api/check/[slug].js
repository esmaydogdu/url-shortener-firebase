//the request on here(api/check/:slug) is been made from domain/key
//here we will search our db with slug, if found we will return longurl

import { db } from "../../../utils/firebase";
//this api/check/:key endpoint
//will look through db with its key as req.query.slug
//if found the key, it will return that document data as a response
export default async (req, res) => {
  const { slug } = req.query;
  await db
    .doc(`/shorten/${slug}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        res.json(doc.data());
      } else {
        res.json({ message: "No such document" });
      }
    })
    .catch((error) => {
      res
        .status(404)
        .send({ message: `error while getting document: ${error}` });
    });
};
