const express = require('express')

const {db} = require('./db/models')

const {usersRoute} = require('./routes/users')
//const {postRoute} = require('./routes/posts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)

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