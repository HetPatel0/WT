const express = require ("express");
const { UserModel } = require("../model/user.model");

const userRouter = express.Router();

userRouter.post("/" ,async(req,res) =>{

    try {
        const UserDetails = new UserModel (req.body)
        await UserDetails.save();
        res.status(201).send({"msg":"Added"})
    } catch (error) {
        console.error("error occured:",error)
        res.status(500).send({"msg" : "error  occured while entering data"})
        
    }

})


userRouter.get("/",async(req,res)=>{
    try {

        let data = await UserModel.find()
        res.send({"data": data});   
        
    } catch (error) {
        console.error("error occured:",error)
        res.status(500).send({"msg" : "error  occured while entering data"})
        
    }
})

// delete 
userRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        // Find the user by ID and remove it
        const deletedUser = await UserModel.findByIdAndDelete(id);
        
        if (deletedUser) {
            res.send({ "msg": "User deleted successfully" });
        } else {
            res.status(404).send({ "msg": "User not found" });
        }
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send({ "msg": "Error occurred while deleting user" });
    }
});




module.exports={userRouter};