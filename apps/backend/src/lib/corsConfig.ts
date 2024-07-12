import { CorsOptions } from "cors";
const whitelist = ["http://localhost:5173","https://caree.vercel.app"];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin && whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};


export default corsOptions