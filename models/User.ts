import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    userName: {
      type: String,
      required: [true, "Username is required"],
    },
    image: {
      type: String,
    },
    ownedProperties: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timestamps: true },
);

export default models.User || model("User", userSchema);
