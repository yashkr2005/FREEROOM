import mongoose from "mongoose";
import env from "./environment.js";
// mongoose.connect(`mongodb://localhost/${env.db}`);
mongoose.connect('mongodb+srv://yashkr2005:DIXM9rYlJqWrdBPx@cluster2.sd6ewlh.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

export default db;
