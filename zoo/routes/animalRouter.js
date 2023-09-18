import express from "express";

import { deleteAnimal, getAll, getAnimal, saveAnimal, updateAnimal } from "../controllers/animalController.js";

import { animalSchema } from "../schema/animalSchema.js";
import { animalValidator } from "../middleware/validator/validator.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getAnimal);
router.post("/", animalSchema, animalValidator, saveAnimal);
router.put("/:id", animalSchema, animalValidator, updateAnimal);
router.delete("/:id", deleteAnimal);

export default router;