import client from "../../lib/mongodb";

export default async function handler(req, res) {
  const myDB = client.db("OOAD");
  const myColl = myDB.collection("Appointment");

  switch (req.method) {
    case "POST":
      var bodyObject = req.body;
      var myPost = await myColl.insertOne(bodyObject);
      res.json(myPost);
      break;
    case "GET":
      const cursor = myColl.find({});
      var myGet = [];
      for await (const element of cursor) {
        myGet.push(element);
      }
      res.json(myGet);
      break;
  }
}
