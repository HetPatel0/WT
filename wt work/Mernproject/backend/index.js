const express = require("express");
// const { connect } = require("mongoose");
const { productRouter } = require("./routes/products.routes");
const cors = require('cors');
const { userRouter } = require("./routes/user.routes");
const mongoose = require("mongoose");

// Connect to the database
mongoose.connect("mongodb+srv://hetp5852:patelhet123@cluster0.qwpgm.mongodb.net/mangement?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        const app = express();
        
        app.use(cors());
        app.use(express.json());

        app.use("/products", productRouter);
        app.use("/user", userRouter);
        app.use("/user/${user._id}",userRouter)
        app.use("/products/${product._id}",productRouter)

        // Start the server
        app.listen(8000, () => {
            console.log("Server is started on port 8000");
        });
    })
    .catch((error) => {
        console.error("Failed to connect to the database", error);
    });
