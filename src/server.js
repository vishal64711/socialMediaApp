const express = require('express')
const app = express()

const{ db } = require('./db/models')

db.sync()
.then(()=>{
    app.listen(8383,()=>{
        console.log('server started on http;//localhost:8383');
    })
})
.catch((err)=>{
    console.error(new Error('Could not start db'));
    console.error(err);
})