import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
	{email: { type: String, required: true },password: { type: String, required: true }, userID: {type: Number, required: true}},
	{writeConcern: {j: true,wtimeout: 1000}});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;