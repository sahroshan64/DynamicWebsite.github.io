const express= require('express');
const Detail= require("../models/details"); 
const Slider= require("../models/slider"); 
const Service=require("../models/service") 
const Contact=require("../models/contact")
const routes=express.Router();
// const mongoose=reuire('mongoose');


// routes.get('/',(req,res)=>{ 
    
    
     
//   res.render('index')
//     })
    routes.get('/', async (req, res) => {
    try {
      const details = await Detail.findOne({ "_id": "648846131067a15573fca22b" });
      const slides = await Slider.find()
      const services = await Service.find()
      // console.log(slides) 
      // console.log(details);
      res.render('index',{  
        details:details,
        slides:slides,
        services:services  
      });
    } catch (error) { 
      console.error(error);
      res.status(500).send('Internal Server Error');
    } 
  })  
  
routes.get('/gallery',async(req,res)=>{  
  try {
    const details = await Detail.findOne({ "_id": "648846131067a15573fca22b" });
    // console.log(details);
    res.render('gallery',{ 
      details:details
    });
  } catch (error) { 
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  }) 

routes.post("/process-contact-form",async(req,res)=>{
  console.log('form is submitted')
  console.log(req.body);
  //save the data to db
  try{
    const data= await Contact.create(req.body);
    console.log(data);
    res.redirect("/")

  } catch(e){
    console.log(e); 
    res.redirect("/") 
  }
  
})
module.exports=routes  
    // })
  
