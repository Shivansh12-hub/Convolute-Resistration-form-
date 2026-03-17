import { asyncHandler } from "../utils/asyncHandler.js";
import Razorpay from "razorpay";


const paymentcontroller = asyncHandler(async(req , res )=>{
try{
  const instance = new Razorpay({
    key_id:process.env.KEY_ID,
      key_secret:process.env.KEY_SECRET
  })

  const{order_id,amount,payment_capture,currency}=req.body
  const options = {
    amount:amount*100,
    currency:currency,
    receipt:order_id,
    payment_capture:payment_capture
  }

  const order = await instance.orders.create(options);
  if(!order)return res.status(500).send("something occured");

  res.status(200).json({success:true,data:order})
}catch(error){
    console.log(error)
}

})

const carddetail = asyncHandler(async(req,res)=>{
  try{
    const instance = new Razorpay({
      key_id:process.env.KEY_ID,
      key_secret:process.env.KEY_SECRET
    })
  
    const{id}=req.body
    
  
    const order = await instance.payments.fetch(id);
    if(!order)return res.status(500).send("something occured");
  
    res.status(200).json({success:true,data:order})
  }catch(error){
      console.log(error)
  }
  
})

export {paymentcontroller,carddetail}