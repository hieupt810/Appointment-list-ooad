import nextConnect from "next-connect";
import middleware from "./database";

const userHandler = nextConnect();

userHandler.use(middleware);
userHandler.get(async (req, res) => {
  let doc = await req.db.collection("User").find();
  doc.forEach((element) => {
    console.log(element);
  });
});

export default userHandler;
