import shortid from "shortid";
import mongoose, { Schema, Model } from "mongoose";
import mongooseIntl from "mongoose-intl";

import { schema as SwarSchema } from "./swar";
import { IThaat } from "../common/types/interfaces";


export const schema = new Schema(
  {
    id: { type: String, default: shortid.generate },
    name: { required: true, type: String, intl: true },
    description: { type: String, intl: true },
    swaras: [{ type: SwarSchema }],
  },
  {
    id: false,
  }
);

schema.plugin(mongooseIntl, {
  languages: ["en", "hi"],
  defaultLanguage: "en",
});

export const model: Model<IThaat> = mongoose.model("Thaat", schema);
