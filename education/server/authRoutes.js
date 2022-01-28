const express=require('express');

const {enquiryData,getHome} =require("./controllers/enquiryform");
const router=express.Router();


router.get("/" ,getHome)
router.route("/register").post(enquiryData)

module.exports =router;