import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    description: {
      type: String,
    },
    location: {
      street: {
        type: String,
        required: [true, "Street is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
      zipcode: String,
    },
    beds: {
      type: Number,
      required: [true, "Beds is required"],
    },
    baths: {
      type: Number,
      required: [true, "Baths is required"],
    },
    squareFeet: {
      type: Number,
      required: [true, "Square feet is required"],
    },
    amenities: [String],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: {
        type: String,
        required: [true, "Seller name is required"],
      },
      email: {
        type: String,
        required: [true, "Seller email is required"],
      },
      phone: {
        type: String,
        required: [true, "Seller phone is required"],
      },
    },
    images: [String],
    is_Featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default models.Property || model("Property", PropertySchema);
