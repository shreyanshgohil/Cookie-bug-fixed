import MongoDBSession from "connect-mongodb-session";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import session from "express-session";
import cookieParser from 'cookie-parser';


config();
const app = express();
const MongoDbStore = MongoDBSession(session);
app.use(express.json());
app.set('trust proxy', 1);
app.use(cors({ credentials: true, origin: process.env.ORIGIN }));


const store = new MongoDbStore({
  uri: "mongodb+srv://shreyansh:fK2OXSG2gwFJiYfp@cluster0.q1f2mq0.mongodb.net/",
  collection: "sessions",
});

app.use(cookieParser());
app.use(
  session({
    secret: "DDSDKSDMKDMSKMDD",
    proxy:true,
    store,
    cookie: {
      path:'/',
      secure: true,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // Session expiration time (1 day)
      sameSite: "none",
    },
  })
);

app.post("/hello-wrold", (req, res, next) => {
  req.session.accessToken = Math.random().toString();
  res.json({ Done: "Hello from shreyansh gohilllllllllll" });
});

app.listen(5000, () => {
  console.log(`Server is started on port 5000`);
});
