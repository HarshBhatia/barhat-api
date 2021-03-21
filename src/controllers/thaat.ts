import { IThaat } from "../common/types/interfaces";
import { model as Model } from "../models/thaat";
import Controller from "./basic";

const objectTitle = "Thaat";
const createBodyFields: Array<string> = ["id", "name", "notation", "frequency"];
const updateBodyFields: Array<string> = createBodyFields;

const controller = Controller<IThaat>({
  objectTitle,
  createBodyFields,
  updateBodyFields,
  Model,
});

export default controller;
