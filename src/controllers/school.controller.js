import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { School } from "../models/school.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addSchool = asyncHandler(async(req,res)=>{
    const data=req.body;
    if(!data){
        throw new ApiError (400,"School Data is missing!");
    }
    const school =await School.create({
        name:data.name,
        address:data.address,
        latitude:data.latitude,
        longitude:data.longitude
    })

    if(!school){
        throw new ApiError(500,"Server issue ! failed to store data in database,Please try again. ")
    }

    return res
    .status(201)
    .json(new ApiResponse(201, school, "School registered successfully!"));

})

const showSchoolListing = asyncHandler(async(req,res)=>{
   
    const listing= await School.find({});
    if(!listing){
        throw new ApiError(500,"Server issue! Failed to find any school.")
    }

    return res
    .status(201)
    .json(new ApiResponse(201, listing, "School listing is as follows!"));

})

export {addSchool,showSchoolListing}