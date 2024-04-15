const express=require("express");
const path=require("path"); //requiero el motor de ejs con path
//Se declara constante a databaseConnection y se configura la ruta de donde esta el módulo exportandose.
const databaseConnection = require("../config/database");
const clientsRoutes = require("./routes/clientsRoutes");


//Inicializar express
const app=express();

//Conectarnos a la DB
databaseConnection.connect();
  
//configurations
app.set("views", path.join(__dirname,"views"));
app.set("view engine", ".ejs");


//Routes
app.use("/", clientsRoutes)

app.listen(5000, ()=>{
    console.log("svr listen to port 5000");
})