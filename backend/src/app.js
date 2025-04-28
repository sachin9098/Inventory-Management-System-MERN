//  in this ile server will create 
const express = require("express");

const app = express();

const cors = require("cors");
const morgan = require("morgan");
const ErrorHandling = require("./middlewares/ErrorHandler");
const ApiError = require("./utils/ApiError");


app.use(cors());
app.use(morgan("dev"));
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({extended:false}))


app.use("/api/v1",require("./routes"))

app.use("*",(req,res)=>{
    throw new ApiError(400, "page not found");
})


app.use(ErrorHandling)


module.exports = app

