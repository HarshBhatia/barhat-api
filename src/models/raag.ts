import shortid from "shortid";
import mongoose, { Model, Schema } from "mongoose";
import mongooseIntl from "mongoose-intl";

import { schema as SwarSchema } from "./swar";
import { IRaag } from "../common/types/interfaces";

export const schema = new Schema(
  {
    id: { type: String, default: shortid.generate },
    name: { type: String, intl: true },
    description: { type: String, intl: true },
    thaat: { type: Schema.Types.ObjectId, ref: "Thaat" },
    aaroh: [{ type: SwarSchema }],
    avroh: [{ type: SwarSchema }],
    pakad: [{ type: SwarSchema }],
    swaras: [{ type: SwarSchema }],
    vaadi: { type: SwarSchema },
    samvaadi: { type: SwarSchema },

    // jaati can be a virtual
    // samay
  },
  {
    id: false,
    skipVersioning: { state: true, updatedAt: true },
    timestamps: { createdAt: "dateCreated", updatedAt: "dateUpdated" },
    useNestedStrict: true,
    strict: true,
    toJSON: { virtuals: true },
  }
);

schema.plugin(mongooseIntl, {
  languages: ["en", "hi"],
  defaultLanguage: "en",
});

export const model: Model<IRaag> = mongoose.model("Raag", schema);
