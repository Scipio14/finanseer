import express from 'express'
import Product from '../models/Product.js'


const router = express.Router();

router.get("/products",async(req,res)=>{
  try {
    const products = await Product.find();
    return res.json(products)
  } catch (error) {
     return res.status(404).json({message:error.message})
  }
})

export default router;