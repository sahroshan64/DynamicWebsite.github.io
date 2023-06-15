const express = require('express')
const app = express()
const mongoose= require('mongoose');
const path = require("path");
const hbs= require('hbs');
const routes= require('../src/routes/main');
const Detail= require("./models/details");
const Slider=require("./models/slider");
const bodyParser=require("body-parser") 
const Service= require("./models/service.js");
const port = 3000  
const public_path = path.join(__dirname,"../public");
app.use(express.static(public_path));
// app.use('static',express.static('../public'))
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('',routes); 

 
        
        
app.set('view engine', 'hbs'); 
app.set('views','../views');  

hbs.registerPartials('../views/partials') 
     
   
   
mongoose.connect("mongodb://localhost:27017/website_tut").then(()=>{ 
    console.log("The connection is sucessfully") 
    // Service.create([
    //   {
    //     icon:'fab fa-accusoft', 
    //     title:'Provide best course',
    //     description:'provide best course that help our student',
    //     linkText:'https://www.learncodewithRoshan.com',
    //     link:'check',
    //   },
    //   {
    //     icon:'fab fa-affiliatetheme', 
    //     title:'learn projects',
    //     description:'provide best course that help our student', 
    //     linkText:'https://www.learncodewithRoshan.com',
    //     link:'learn',
    //   },
    //   {
    //     icon:'fab fa-affiliatetheme', 
    //     title:'learn projects',
    //     description:'provide best course that help our student',
    //     linkText:'https://www.learncodewithRoshan.com', 
    //     link:'learn',
    //   }
    // ])  
   








    // Slider.create([
    //   {
    //     title:'Learn Java is very easy manner', 
    //     subTitle:'Java is one of the most popular language',
    //     ImageUrl:'/image/s1.jpeg'

    //   }, 
    //   { 
    //     title:'What is python',
    //     subTitle:'python is one of the most popular language',
    //     ImageUrl:'/image/s2.jpeg'  

    //   },  
    //   {
    //     title:'What is nodejs',
    //     subTitle:'Nodejs is one of the most popular language',
    //     ImageUrl:'/image/s3.jpeg' 

    //   },  
    // ]) 
 
 
 
    // Detail.create({
    //     brandName:"Infotechnical solution",
    //     brandIconUrl:"https://th.bing.com/th/id/R.02da664bd3a9b3c32f755ee75f80680f?rik=FZhJBydcQf0rPQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_545632.png&ehk=YVbrDPehbVWbYZyvpHVdTRw%2fOAGTlzr2YR2ael3tluw%3d&risl=&pid=ImgRaw&r=0,",
    //     links:[
    //         { 
    //             label:"Home", 
    //             url:"/"   
    //         }, 
    //         {  
    //             label:"services",  
    //             url:"/services" 
    //         }, 
    //         {
    //             label:"Gallery", 
    //             url:"/gallery" 
    //         },
    //         {
    //             label:"About",
    //             url:"/about" 
    //         },
    //         {
    //             label:"Contact-us",
    //             url:"contact-us"   
    //         },


    //     ] 

    // })//we have commented this becaue everytime we have we net new collection details which we dont need so firstly we saved and get out new collection so we commented out
}).catch(()=>{
    console.log("The connection is not sucessfully")
})  
app.listen(port, () => {     
  console.log(`Example app listening on port ${port}`) 
})             