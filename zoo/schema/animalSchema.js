import { body } from "express-validator";

 export const animalSchema = [
    body("species", "Species can't be blank").notEmpty(),
    body("name", "Name can't be blank").notEmpty(),
    body("habitat", "Habitat can't be blank").notEmpty(),
    body("age", "Age must be an integer equal or greater than zero").isInt({ min: 0,})
];