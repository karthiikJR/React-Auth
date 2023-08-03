import express from 'express'
import Jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from "../models/Users.js";


const router = express.Router()

router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email:email });
    console.log(user)
    const mostRecentUser = await UserModel.findOne({}, {}, { sort: { _id: -1 } });
    console.log(mostRecentUser)
    console.log(mostRecentUser.userID)
    let userID = parseInt(mostRecentUser.userID) + 1;
    console.log(userID)

    if(user) {
       return res.json({
					message: "404",
				});
    }
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = await UserModel({
					email:email,
					password: hashedPass,
                    userID
				});
                newUser.save();

        res.json({
					message: "200",
				});
    }
);

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const user = await UserModel.findOne({ email });
    

	if (!user) {
		res.json({ message: "404" });
        return; 
	}
    const isPassValid = await bcrypt.compare(password, user.password);
    if(!isPassValid) {
        return res.json({message: "403"})
    }

    const token = Jwt.sign({id: user._id},"secret");
    res.json({token,userID:user._id, userPos:user.userID});
});

export {router as userRouter}