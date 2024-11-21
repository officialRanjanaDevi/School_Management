import { Router } from "express";

 import  {addSchool,showSchoolListing}from "../controllers/school.controller.js";
import {validateSchool} from "../middlewares/school.middleware.js";

const router = Router();

router.route("/addSchool").post(validateSchool,addSchool);

router.route("/listSchools").get(showSchoolListing);


export default router;
