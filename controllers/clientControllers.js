const databaseConnection=require("../../config/database");

const getClientById=(req,res)=>{
    res.send("Esto devolverá un solo cliente buscado por ID");
};

const principal=(req,res)=>{
    res.render("./pages/index");
};

const addCustom=(req,res)=>{
    res.render("./pages/addcustom")
};

const clientList=(req,res)=>{
    databaseConnection.query("SELECT * FROM `c-membresias`",(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.render("./pages/customers",{
            custom:data
            })
        }
    })
}
module.exports = {principal, getClientById, addCustom,clientList}

