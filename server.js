const express=require('express');
const path= require('path');


const app= express();
// / Initier les fichier static
// app.use(express.static(path.join(__dirname, 'public')))

// Fake database
let posts=[
    {id:1, title:'post one', created_at:Date.now()},
    {id:2, title:'post one', created_at:Date.now()},
    {id:3, title:'post one', created_at:Date.now()}
];

app.get('/api/post', (req, res)=>{
    res.status(200).json(posts);
})





app.listen(8000, ()=> console.log('server lancée sur le post: 8000'))

