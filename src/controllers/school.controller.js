import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { School } from "../models/school.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addSchool = asyncHandler(async (req, res) => {
    const data = req.body;

    if (!data) {
        throw new ApiError(400, "School Data is missing!");
    }

    if (isNaN(data.latitude) || isNaN(data.longitude)) {
        throw new ApiError(400, "Invalid latitude or longitude provided!");
    }

    const school = await School.create({
        name: data.name,
        address: data.address,
        latitude: data.latitude,
        longitude: data.longitude,
        location: {
            type: "Point",
            coordinates: [parseFloat(data.longitude), parseFloat(data.latitude)],
        },
    });

    if (!school) {
        throw new ApiError(500, "Server issue! Failed to store data in the database. Please try again.");
    }

    return res
        .status(201)
        .json(new ApiResponse(201, school, "School registered successfully!"));
});



const showSchoolListing = asyncHandler(async (req, res) => {
    const { latitude, longitude } = req.body; 

    if (!latitude || !longitude) {
        throw new ApiError(400, "Latitude and longitude are required!");
    }

    const userLocation = [parseFloat(longitude), parseFloat(latitude)];
      const listing = await School.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: userLocation,
                },
                distanceField: "distance",
                spherical: true, 
            },
        },
  
    ]);
  
    if (!listing) {
        throw new ApiError(404, "No schools found near your location.");
    }
 
    return res
        .status(200)
        .json(new ApiResponse(200, listing, "Schools sorted by your location!"));
});


export {addSchool,showSchoolListing}