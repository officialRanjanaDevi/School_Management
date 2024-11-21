import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
const validateSchool =asyncHandler(async(req,res,next)=>{
next()
})

export {validateSchool}