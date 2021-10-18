// npm init -y
// npm i express
const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieParser = require('cookie-parser');
const userRouter = require('./Router/userRouter');
const authRouter = require('./Router/authRouter');
const planRouter = require('./Router/planRouter');
const reviewRouter = require('./Router/reviewRouter');
const bookingRouter = require('./Router/bookingRouter');
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();
// this line 
// post -> /
// app.post("/", function (req, res, next) {
//     let body = req.body;
//     console.log("before", body);
//     next();
// })
// inbuilt menthods of express has next already implmeneted
// always use me
//  express json -> req.body add
// reserve a folder only from which client can acces the files 
app.use(express.static("Frontend_folder"));
app.use(express.json());
app.use(cookieParser());
// // function -> route  path
// // frontend -> req -> /
// read data storage
// localhost/user/10 -> post 
// let content = JSON.parse(fs.readFileSync("./data.json"));
// // localhost / auth / 10-> patch
app.use('/api/user', userRouter);
app.use("/api/plan", planRouter);
app.use('/api/auth', authRouter);
app.use('/api/review', reviewRouter);
app.use('/api/booking', bookingRouter);
app.listen(8081, function () {
    console.log("server started");
})
// 404 page
app.use(function (req, res) {
    // console.log("fullPath", fullPath);
    res.status(404).sendFile
        (path.join(__dirname, "404.html"));
})