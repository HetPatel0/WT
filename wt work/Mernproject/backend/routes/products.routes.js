const express  = require("express");
const { productModel } = require("../model/products.model");

const productRouter = express.Router();


productRouter.post("/", async (req,res)=>{
    const product = new productModel(req.body)
    await product.save();
    res.send("product added")

})

//getting all
productRouter.get("/",async(req,res) =>{
    const products = await productModel.find()
    res.send({"data": products});
})





module.exports ={productRouter}