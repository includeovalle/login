const express 		= require("express");
const path 		= require("path");
const bcrypt		= require('bcrypt');
const mongoose 		= require("mongoose");

const bodyParser = require("body-parser");
const User = require('./user')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


//folder estatico
app.use(express.static(path.join(__dirname, './public')))
app.use('/css', express.static(path.join(__dirname, './public/css')))
app.use('/src', express.static(path.join(__dirname, './public/src')))
app.use('/js', express.static(path.join(__dirname, './public/js')))

//aqui el opbligatorio es 'mongodb://'
//le continua el usuario al que le dimos permisos en la bd
//en este caso es 'usuario'
//despues va ':' y la contrasenia supongo que se le daran unas rondas de sal
//despues se agrega '@localhost/ '
//y finalmente la bd a la que vamos

const mongo_uri = 'mongodb://usuario1:facilito-del1al,4@localhost/Juego' 

mongoose.connect(mongo_uri,{useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
		if (err) {
			throw err;
		} else {
			console.log(`Conectamos con la bd ${mongo_uri}`);
		}

});




app.post('/register',(req, res)=>{
	const {username, correo, password} = req.body;

	const user = new User({username, correo, password});

	user.save(err =>{
	if (err){
	res.status(500).send('ERROR al registrar usuario');
			throw err;
	}else{
	res.status(200).send('Usuario registrado correctamente')	
	}
	})
})










var PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{ 
	console.log(`Server running at: ${PORT}`)
});
