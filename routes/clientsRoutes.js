const express = require ("express");
const {principal,getClientById, addCustom,clientList}=require("../controllers/clientControllers.js");


const clientsRoutes=express.Router();

clientsRoutes.get("/",  principal);

clientsRoutes.get("/clientbyid", getClientById);

clientsRoutes.get("/addcustom", addCustom);

clientsRoutes.get("/clientlist",clientList);


module.exports= clientsRoutes;