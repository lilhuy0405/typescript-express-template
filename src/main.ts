import {AppDataSource} from "./data-source";
import * as express from "express"
import apiRoute from "./route/api";
import 'dotenv/config';
import "reflect-metadata"
//connect db
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to database')
  })
  .catch((error) => {
    console.log('Connect db error: ' + error)
  });
//init express app
const app = express();
app.use(express.json());
//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));
//load api routes
app.use('/api/v1', apiRoute);
// public resources
app.use("/uploads", express.static('uploads'));

app.listen(process.env.PORT || 3000, function () {
  console.log("Example app listening on: " + "http://localhost:" + process.env.PORT || 3000);
});



