const express=require('express');
const path= require('path');

const port=process.env.PORT || 8080


const app= express();
// / Initier les fichier static
app.use(express.static(path.join(__dirname, 'public')))

// Fake database
let posts=[
    {id:1, title:'post one', created_at:Date.now()},
    {id:2, title:'post two', created_at:Date.now()},
    {id:3, title:'post three', created_at:Date.now()}
];

// GET Tous les postes.
app.get('/api/post', (req, res)=>{
    if(!posts){
        return res.status(500).json({mesage: `probleme lier à la Database.`})
    }

     res.status(200).json(posts);
    
    
})

// GET un poste.
app.get('/api/post/:id', (req,res)=>{
     const id=parseInt(req.params.id);
     const result=posts.find((post)=>post.id===id)
     if(!result){
        return res.status(404).json({mesage: `le postes correspondant à l'id: ${id} est introuvable.`})
     }
        res.status(200).json(result);
    
})





app.listen(port, ()=> console.log(`server lancée sur le post: ${port}`))

