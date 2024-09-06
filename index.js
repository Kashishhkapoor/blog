import express from 'express';
import bodyParser from 'body-parser';

const port=2000;
const app=express();
const blogs=[];

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("index.ejs",{
        blogs
    })

})
app.get('/add-blog',(req,res)=>{
    res.render("addBlog.ejs")
})

app.post('/add-blog',(req,res)=>{
    const data=req.body
    blogs.push(data)
    console.log(blogs)
    res.redirect('/')

})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})