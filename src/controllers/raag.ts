import { IRaag } from "../common/types/interfaces";
import { model as Model } from "../models/raag";
import Controller from "./basic";

const objectTitle = "Raag";
const createBodyFields: Array<string> = ["id", "name", "notation", "frequency"];
const updateBodyFields: Array<string> = createBodyFields;

const controller = Controller<IRaag>({
  objectTitle,
  createBodyFields,
  updateBodyFields,
  Model,
});

export default controller;
