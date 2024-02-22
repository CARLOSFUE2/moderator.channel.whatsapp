import cors from "cors";

const whitelist = ["*"];
const options = {
  origin: (origin, callback) => {
    try {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      }
    } catch (error) {
      callback(new Error("no permitido"));
    }
  },
};
cors(options);

module.exports = cors;