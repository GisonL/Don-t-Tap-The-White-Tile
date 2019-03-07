const path = require('path')
const express = require('express')
const app = express()
const exStatic=require("express-static");
const fs = require('fs')
app.use(exStatic('./'))
app.listen(3000,()=>console.log('server running on port 3000'))
