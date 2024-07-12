import DatauriParser from "datauri/parser.js";
import { DataURI } from "datauri/types";
import path from "path";

const dataUri = (file: { originalname: string; buffer: DataURI.Input; }) => {
  const parser = new DatauriParser();
  const fileName = path.extname(file.originalname).toString();
  return parser.format(fileName, file.buffer);
};

export default dataUri;
