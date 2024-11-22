import { ApiError } from "../utils/ApiError.js"
import { body, validationResult } from "express-validator";


const validateSchool = [
    body("name").notEmpty().isString().withMessage("School name is required"),
    body("address").notEmpty().isString().withMessage("School address is required"),
    body("latitude").notEmpty().isFloat().withMessage("School latitude is required and should be a floating number"),
    body("longitude").notEmpty().isFloat().withMessage("School longitude is required and should be a floating number"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json(
          new ApiError(
            400,
            "School Validation failed",
            errors.array().map((error) => error.msg)
          )
        );
      }
      next();
    },
  ];


export {validateSchool}