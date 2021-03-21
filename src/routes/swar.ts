import express from "express";
import controller from "../controllers/swar";
const router = express.Router();

router
  .route("/")
  .get(controller.getMultiple)
  .post(controller.create)
