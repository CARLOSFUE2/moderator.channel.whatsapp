import mongoose from "mongoose";

const { MONGO_HOSTNAME, MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB } =
  process.env;

const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("conecto con mongo"))
  .catch((err) => console.error("error:", err));
export default mongoose;