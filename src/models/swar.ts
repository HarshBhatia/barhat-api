import shortid from "shortid";
import mongoose, { Model, Schema } from "mongoose";
import mongooseIntl from "mongoose-intl";
import { ISwar } from "../common/types/interfaces";

export const schema = new Schema(
  {
    id: { type: String, default: shortid.generate },
    name: { required: true, type: String, intl: true },
    notation: { required: true, type: String, intl: true },
    frequency: { type: Number, required: true },
  },
  {
    id: false,
  }
);

schema.plugin(mongooseIntl, {
  languages: ["en", "hi"],
  defaultLanguage: "en",
});

export const model: Model<ISwar> = mongoose.model("Swar", schema);
