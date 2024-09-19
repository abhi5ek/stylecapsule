const express = require('express');
const mongoose = require('mongoose')
const app = express()

app.listen(5000,()=>{
    console.log("app.js running on port 5000")
})
