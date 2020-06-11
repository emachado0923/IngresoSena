require("./Configs/config");
console.clear();

// ---------------------------------- //
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Database Connection
mongoose.connect(process.env.URLDB,{ useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=>{
        console.log('¡Connection Successfully!')
    });


// Initialize the application
const app = express();


// Middlewares
app.use('/static', express.static(__dirname + '/reportes'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));


// Cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


//Routes
app.use("/api/publico", require('./Routes/publicoRoutes'));
app.use("/api/aprendiz", require('./Routes/aprendizRoutes'));


// Run the server
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});