const connection = require("../../config/db");
const bcryptjs=require('bcryptjs');
const { changeUser } = require("../../config/db");

validacion=false


module.exports= app => {

	app.get('/', (req,res) => {
	

		if (req.session.loggedin || req.session.loggedinAdmin){
		
			res.render('../views/login2.ejs', {
				login:true,
				nombre: req.session.nombre,
				rol: req.session.rol,
				
			});
		

		} else {
			res.render('../views/login2.ejs', {
				login:false,
				nombre: "por favor inicie sesion",
				rol: "",
				
			});
		}
		
	})

	


app.get('/usuarios', (req,res) => {

		if (req.session.loggedin){
			connection.query("SELECT * FROM usuario", (err, results)=>{
				console.log(results)
				if(err){
					res.send(err);
				} else {

					res.render('../views/usuarios.ejs', {
					login:true,
					nombre: req.session.nombre,
					usuario: results,
					rol:""
					
				});
			}});

		} else {
			connection.query("SELECT * FROM usuario", (err, results) => {
				console.log(results)
				res.render('../views/usuarios.ejs', {
				
				login:false,
				nombre: "ingrese por favor",
				usuario: results,
				rol: ""
				
			});
			})
			
		}
	})

app.get('/activos', (req,res) => {

		if (req.session.loggedin){
			connection.query("SELECT * FROM usuario", (err, results)=>{
				console.log(results)
				if(err){
					res.send(err);
				} else {

					res.render('../views/activos.ejs', {
					login:true,
					nombre: req.session.nombre,
					usuario: results,
					rol:""
					
				});
			}});

		} else {
			connection.query("SELECT * FROM activos.ejs", (err, results) => {
				console.log(results)
				res.render('../views/usuarios.ejs', {
				
				login:false,
				nombre: "ingrese por favor",
				usuario: results,
				rol: ""
				
			});
			})
			
		}
	})








app.get('/formulario_nuevo_usuario', (req,res) => {

		if (req.session.loggedin){
			connection.query("SELECT * FROM usuario", (err, results)=>{
				console.log(results)
				if(err){
					res.send(err);
				} else {

					res.render('../views/formulario_nuevo_usuario.ejs', {
					login:true,
					nombre: req.session.nombre,
					usuario: results,
					rol:""
					
				});
			}});

		} else {
			connection.query("SELECT * FROM usuario", (err, results) => {
				console.log(results)
				res.render('../views/formulario_nuevo_usuario.ejs', {
				
				login:false,
				nombre: "ingrese por favor",
				usuario: results,
				rol: ""
				
			});
			})
			
		}
	})





	

	app.get('/login2', (req,res)=>{
		res.render('../views/login2.ejs')
	})

	

	
	app.get('/registro_admin', (req,res)=>{
		res.render('../views/registro_admin.ejs')
	})


	
	app.get('/activos', (req,res)=>{
		res.render('../views/activos.ejs')
	})



	app.get('/usuarios', (req,res)=>{
		res.render('../views/usuarios.ejs')
	})






	
	
	
	


	
	

	app.get('/logout', (req,res)=> {
		req.session.destroy(() => {
			res.redirect('/');
		})
	})

	app.get("/delete/:id", (req,res)=> {
	
		let id=req.params.id;
		connection.query("DELETE FROM usuario WHERE id_usuario = ?", [id], (err,results) => {
			
			if (err){
				res.send(err);
			}
			else {
					res.render('../views/formulario_nuevo_usuario.ejs', {
						alert: true,
						alertTitle: "La mascota ha sido eliminada satisfactoriamente",
						alertMessage: "la mascota ha sido eliminada de manera correcta",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'usuarios'
					});
			}
		});

		
		res.render('../views/formulario_nuevo_usuario.ejs', {
						alert: true,
						alertTitle: "La mascota ha sido eliminada satisfactoriamente",
						alertMessage: "la mascota ha sido eliminada de manera correcta",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'usuarios'
					});
	
	})


	  app.post("/edit/:id_usuario", (req,res) => {
        const id_usuario = req.params.id_usuario;
        const {nuevo_nombre_usuario, nuevo_nombre_completo_usuario, estado_usuario} = req.body
        console.log(req.body);
        connection.query("UPDATE usuario SET nombre_usuario = ?, nombre_completo_usuario = ?, estado_usuario = ? WHERE id_usuario = ?", [nuevo_nombre_usuario, nuevo_nombre_completo_usuario, estado_usuario, id_usuario], (err, result) => {
            if(err){
                res.send(err);
            } else {
                res.redirect("/usuarios");
            }
        })
    })



	

	//registro usuario
		app.post('/registro_admin',async(req,res)=>{
		const {firstName,pass,pass1} = req.body;
		console.log(req.body);
		let passwordHash = await bcryptjs.hash(pass, 8);
		connection.query("INSERT INTO administrador SET ?" , {
			nombre_admin:firstName,
			contrasena_admin:passwordHash,
		}, async(err,result)=>{
			if(err){
				console.log(err)
			}else{
				res.render('../views/registro_admin.ejs',{
					alert: true,
					alertTitle: "Registration",
					alertMessage: "Successful Registration",
					alertIcon: "success",
					showConfirmButton: false,
					timer: 15000,
					ruta: ""
				})
			}
		})
	})


		
	
		




	app.post('/formulario_nuevo_usuario', async(req,res) => {
		const {nombre_completo,nombre_usuario,contrasena,estado_usuario} = req.body;
		
		if (validacion===false){
			connection.query ("INSERT INTO usuario SET ?", {
				nombre_completo_usuario: nombre_completo,
				nombre_usuario: nombre_usuario,
				contrasena_usuario: contrasena, 
				estado_usuario
			
			},  (error, results)=>{
				if (error){
					console.log(error);
				} else{
					res.render('../views/formulario_nuevo_usuario.ejs', {
						alert: true,
						alertTitle: "Informacion subida de manera satisfactoria",
						alertMessage: "ahora te podran ayudar a encontrar a tu mascota",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'usuarios'
					});
				}
			})	
		} else {
				res.render('../views/formulario_nuevo_usuario.ejs', {
						alert: true,
						alertTitle: "error",
						alertMessage: "Error al registrarse",
						alertIcon: "error",
						showConfirmButton: false,
						timer: 1500,
						ruta:'formulario_nuevo_usuario'
					});
			};
		});	

	
//login usuario	
	app.post("/auth", (req,res) => {
		const {input_documento, pass} = req.body;
	
		if (input_documento && pass){
			connection.query("SELECT * FROM administrador WHERE nombre_admin = ?",[input_documento], async(err,results)=>{
		
				if(err){
					res.send("Error " + err);
				}
				if (results.length === 0 || !(await bcryptjs.compare(pass, results[0].contrasena_admin))){ //Verificar que el vector results no este vacio y verificar que la contrasena no coincide
					
					res.render('../views/login2.ejs', {
						alert: true,
						alertTitle: "Error",
						alertMessage: "Contraseña y/o usuario incorrecto",
						alertIcon: "error",
						showConfirmButton: false,
						timer: 1500,
						ruta:'/'
					});
				} else {
				
					req.session.loggedin = true;
				
					
					res.render('../views/login2.ejs', {
						alert: true,
						alertTitle: "Bienvenido",
						alertMessage: "de nuevo",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'usuarios'
					});
					
				}
			
		
		})
		}


	})


}

