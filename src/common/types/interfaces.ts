import mongoose from "mongoose";

export interface IControllerConfig<T extends mongoose.Document> {
  objectTitle: string;
  createBodyFields: Array<string>;
  updateBodyFields: Array<string>;
  Model: mongoose.Model<T>;
}

export interface IThaat extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  frequency: Number;
}

export interface ISwar extends mongoose.Document {
  id: string;
  name: string;
  notation: string;
  frequency: Number;
}

export interface IRaag extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  thaat: any;
  aaroh: Array<ISwar>;
  avroh: Array<ISwar>;
  pakad: Array<ISwar>;
  swaras: Array<ISwar>;
  vaadi: ISwar;
  samvaadi: ISwar;
}
