import { ISwar } from "../common/types/interfaces";
import { model as Model } from "../models/swar";
import Controller from "./basic";

const objectTitle = "Swar";
const createBodyFields: Array<string> = ["id", "name", "notation", "frequency"];
const updateBodyFields: Array<string> = createBodyFields;

const controller = Controller<ISwar>({
  objectTitle,
  createBodyFields,
  updateBodyFields,
  Model,
});

export default controller;
