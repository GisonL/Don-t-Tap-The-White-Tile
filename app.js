const path = require('path')
const express = require('express')
const app = express()
const exStatic=require("express-static");
const fs = require('fs')
app.use(exStatic('./'))
app.listen(80,()=>console.log('server running on port 80'))
