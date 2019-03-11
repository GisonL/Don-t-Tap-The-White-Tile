const path = require('path')
const express = require('express')
const app = express()
const exStatic=require("express-static");
const fs = require('fs')
app.use(exStatic('./'))
app.listen(8080,()=>console.log('server running on port 8080'))
