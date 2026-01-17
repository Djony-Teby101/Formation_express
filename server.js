const express=require('express');
const path= require('path');


const app= express();



// Injection de fichier static.
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'))
})


app.listen(8000, ()=> console.log('server lancée sur le post: 8000'))

