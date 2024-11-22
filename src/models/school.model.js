import mongoose from "mongoose";
const schoolSchema = new mongoose.Schema(
  {
      name: {
          type: String,
          required: true,
      },
      address: {
          type: String,
          required: true,
      },
      latitude: {
          type: mongoose.Schema.Types.Decimal128,
          required: true,
      },
      longitude: {
          type: mongoose.Schema.Types.Decimal128,
          required: true,
      },
      location: {
          type: {
              type: String,
              enum: ['Point'], 
              required: true,
          },
          coordinates: {
              type: [Number], 
              required: true,
          },
      },
  },
  { timestamps: true }
);

schoolSchema.index({ location: '2dsphere' }); 
export const School = mongoose.model('School', schoolSchema);
