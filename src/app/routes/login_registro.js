const connection = require("../../config/db");
const bcryptjs=require('bcryptjs');
const { changeUser } = require("../../config/db");
validacion=false


module.exports= app => {
	app.get('/', (req,res) => {
	

		if (req.session.loggedin || req.session.loggedinAdmin){
		
			res.render('../views/index.ejs', {
				login:true,
				nombre: req.session.nombre,
				rol: req.session.rol

			});
		

		} else {
			res.render('../views/index.ejs', {
				login:false,
				nombre: "por favor inicie sesion",
				rol: ""
			});
		}
		
	})

		app.get('/sobre_nosotros', (req,res) => {
	

		if (req.session.loggedin || req.session.loggedinAdmin){
		
			res.render('../views/sobre_nosotros.ejs', {
				login:true,
				nombre: req.session.nombre,
				rol: req.session.rol
				

			});
		

		} else {
			res.render('../views/sobre_nosotros.ejs', {
				login:false,
				nombre: "por favor inicie sesion",
				rol: ""
			});
		}
		
	})

		app.get('/login2', (req,res) => {
	

		if (req.session.loggedin || req.session.loggedinAdmin){
		
			res.render('../views/login2.ejs', {
				login:true,
				nombre: req.session.nombre,
				

			});
		

		} else {
			res.render('../views/login2.ejs', {
				login:false,
				nombre: "por favor inicie sesion"
			});
		}
		
	})



app.get('/adopta', (req,res) => {

		if (req.session.loggedin){
			connection.query("SELECT * FROM mascotas", (err, results)=>{
				if(err){
					res.send(err);
				} else {
					res.render('../views/adopta.ejs', {
					login:true,
					nombre: req.session.nombre,
					adopcion: results,
					rol: req.session.rol
				});
			}});

		} else {
			connection.query("SELECT * FROM mascotas", (err, results) => {
				res.render('../views/adopta.ejs', {
				login:false,
				nombre: "ingrese por favor",
				adopcion: results,
				rol: ""
			});
			})
			
		}
	})



app.get('/formulario_adopcion_mascota', (req,res) => {

		if (req.session.loggedin){
			connection.query("SELECT * FROM mascotas", (err, results)=>{
				if(err){
					res.send(err);
				} else {
					res.render('../views/formulario_adopcion_mascota.ejs', {
					login:true,
					nombre: req.session.nombre,
					adopcion: results,
					rol: req.session.rol
				});
			}});

		} else {
			connection.query("SELECT * FROM mascotas", (err, results) => {
				res.render('../views/adopta.ejs', {
				login:false,
				nombre: "ingrese por favor",
				adopcion: results,
				rol: ""
			});
			})
			
		}
	})



app.get('/formulario_mascotas_extraviadas', (req,res) => {
	

		if (req.session.loggedin || req.session.loggedinAdmin){
		
			res.render('../views/formulario_mascotas_extraviadas.ejs', {
				login:true,
				nombre: req.session.nombre,
				rol: req.session.rol
				

			});
		

		} else {
			res.render('../views/formulario_mascotas_extraviadas.ejs', {
				login:false,
				nombre: "por favor inicie sesion",
				rol: ""
			});
		}
		
	})

	app.get('/donaciones', (req,res) => {

		if (req.session.loggedin){
			res.render('../views/donaciones.ejs', {
				login:true,
				nombre: req.session.nombre,
				rol: req.session.rol
			});
		} else {
			res.render('../views/donaciones.ejs', {
				login:false,
				nombre: "por favor inicie sesion",
				rol: ""
			});
		}
	})



	app.get('/mascotas_extraviadas', (req,res) => {

		if (req.session.loggedin){
			connection.query("SELECT * FROM mascotas_estraviadas", (err, results)=>{
				if(err){
					res.send(err);
				} else {
					res.render('../views/mascotas_extraviadas.ejs', {
					login:true,
					nombre: req.session.nombre,
					mascotas: results,
					rol: req.session.rol
				});
			}});

		} else {
			connection.query("SELECT * FROM mascotas_estraviadas", (err, results) => {
				res.render('../views/mascotas_extraviadas.ejs', {
				login:false,
				nombre: "por favor inicie sesion",
				mascotas: results,
				rol: ""
			});
			})
			
		}
	})

	app.get('/peticiones', (req,res) => {

		if (req.session.loggedin){
			connection.query("SELECT * FROM adoptante", (err, results)=>{
				if(err){
					res.send(err);
				} else {
					res.render('../views/peticiones.ejs', {
					login:true,
					nombre: req.session.nombre,
					adoptante: results,
					rol: req.session.rol
				});
			}});

		} else {
			connection.query("SELECT * FROM adoptante", (err, results) => {
				res.render('../views/peticiones.ejs', {
				login:false,
				nombre: "por favor inicie sesion",
				adoptante: results,
				rol: ""
			});
			})
			
		}
	})


	app.get('/formulario_adopcion', (req,res) => {

		if (req.session.loggedin){
			connection.query("SELECT * FROM mascotas", (err, results)=>{
				if(err){
					res.send(err);
				} else {
					res.render('../views/formulario_adopcion.ejs', {
					login:true,
					nombre: req.session.nombre,
					adopcion: results
				});
			}});

		} else {
			connection.query("SELECT * FROM mascotas", (err, results) => {
				res.render('../views/formulario_adopcion.ejs', {
				login:false,
				nombre: "ingrese por favor",
				adopcion: results
			});
			})
			
		}
	})

	app.get('/login2', (req,res)=>{
		res.render('../views/login2.ejs')
	})

	app.get('/mascotas', (req,res)=>{
		res.render('../views/index_mascotas.ejs')
	})

	app.get('/donaciones', (req,res)=>{
		res.render('../views/donaciones.ejs')
	})

	app.get('/adopta', (req,res)=>{
		res.render('../views/adopta.ejs')
	})

	app.get('/mascotas_extraviadas', (req,res)=>{
		res.render('../views/mascotas_extraviadas.ejs')
	})


	app.get('/sobre_nosotros', (req,res)=>{
		res.render('../views/sobre_nosotros.ejs')
	})
	
	app.get('/registro', (req,res)=>{
		res.render('../views/registro.ejs')
	})

	app.get('/peticiones', (req,res)=>{
		res.render('../views/peticiones.ejs')
	})



	app.get('/formulario_mascotas_extraviadas', (req,res)=>{
		res.render('../views/formulario_mascotas_extraviadas.ejs')
	})

	app.get('/formulario_adopcion', (req,res)=>{
		res.render('../views/formulario_adopcion.ejs')
	})

	app.get('/formulario_adopcion_mascota', (req,res)=>{
		res.render('../views/formulario_adopcion_mascota.ejs')
	})

	app.get('/logout', (req,res)=> {
		req.session.destroy(() => {
			res.redirect('/');
		})
	})

	app.get("/delete/:id", (req,res)=> {
		let id=req.params.id;
		connection.query("DELETE FROM mascotas WHERE Id_mascotas = ?", [id], (err,results) => {
			if (err){
				res.send(err);
			}
			else {
					res.render('../views/formulario_mascotas_extraviadas.ejs', {
						alert: true,
						alertTitle: "La mascota ha sido eliminada satisfactoriamente",
						alertMessage: "la mascota ha sido eliminada de manera correcta",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'adopta'
					});
			}
		});
	})

	app.get("/delete2/:id", (req,res)=> {
		let id=req.params.id;
		connection.query("DELETE FROM mascotas_estraviadas WHERE id_mascota_extraviada = ?", [id], (err,results) => {
			if (err){
				res.send(err);
			}
			else {
					res.render('../views/formulario_mascotas_extraviadas.ejs', {
						alert: true,
						alertTitle: "La mascota ha sido eliminada satisfactoriamente",
						alertMessage: "la mascota ha sido eliminada de manera correcta",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'mascotas_extraviadas'
					});
			}
		});
	})

		app.get("/delete3/:id", (req,res)=> {
		let id=req.params.id;
		connection.query("DELETE FROM adoptante WHERE id_adoptante = ?", [id], (err,results) => {
			if (err){
				res.send(err);
			}
			else {
					res.render('../views/login2.ejs', {
						alert: true,
						alertTitle: "La mascota ha sido eliminada satisfactoriamente",
						alertMessage: "la mascota ha sido eliminada de manera correcta",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'peticiones'
					});
			}
		});
	})



	
//registro usuario
	app.post('/registro', async(req,res) => {
		const {input_documento, input_fecha_de_nacimiento, firstName, email, direccion, pass, phone, pass1, input_rol} = req.body;
		console.log(req.body);
		console.log(input_documento);
		let inputReContrasena = await bcryptjs.hash(pass, 8);
		if (validacion===false){
			connection.query ("INSERT INTO usuario SET ?", {
				documento: input_documento,
				nombre: firstName,
				telefono: phone,
				correo_electronico: email,
				fecha_de_nacimiento: input_fecha_de_nacimiento,
				direccion: direccion,
				contrasena: inputReContrasena,
				rol: input_rol

			},  (error, results)=>{
				if (error){
					console.log(error);
				} else{
					res.render('../views/registro.ejs', {
						alert: true,
						alertTitle: "Registration",
						alertMessage: "successful Registration",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:''
					});
				}
			})	
		} else {
				res.render('../views/registro.ejs', {
						alert: true,
						alertTitle: "error",
						alertMessage: "Error al registrarse",
						alertIcon: "error",
						showConfirmButton: false,
						timer: 1500,
						ruta:'registro'
					});
			};
		});	



	app.post('/formulario_mascotas_extraviadas', async(req,res) => {
		const {input_documento_dueño, input_nombre_dueño, email_dueño_mascota, telefono_dueño_mascota, direccion_dueño_mascota, nombre_mascota, input_fecha_de_nacimiento_mascota, raza_mascota, sexo_mascota, input_foto_mascota} = req.body;
		console.log(req.body);
		console.log(input_documento_dueño);
		if (validacion===false){
			connection.query ("INSERT INTO mascotas_estraviadas SET ?", {
				documento_dueño_mascota: input_documento_dueño,
				nombre_dueño_mascota: input_nombre_dueño,
				correo_dueño_mascota: email_dueño_mascota,
				telefono_dueño_mascota: telefono_dueño_mascota,
				direccion_dueño_mascota: direccion_dueño_mascota,
				nombre_mascota: nombre_mascota,
				fecha_nacimiento_mascota: input_fecha_de_nacimiento_mascota,
				raza_mascota: raza_mascota,
				sexo_mascota: sexo_mascota,
				foto_mascota: input_foto_mascota
			},  (error, results)=>{
				if (error){
					console.log(error);
				} else{
					res.render('../views/formulario_adopcion.ejs', {
						alert: true,
						alertTitle: "Informacion subida de manera satisfactoria",
						alertMessage: "ahora te podran ayudar a encontrar a tu mascota",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'mascotas_extraviadas'
					});
				}
			})	
		} else {
				res.render('../views/formulario_adopcion.ejs', {
						alert: true,
						alertTitle: "error",
						alertMessage: "Error al registrarse",
						alertIcon: "error",
						showConfirmButton: false,
						timer: 1500,
						ruta:'mascotas_extraviadas'
					});
			};
		});	

	app.post('/formulario_adopcion', async(req,res) => {
		const {nombre_mascota, input_fecha_de_nacimiento_mascota, raza_mascota, sexo_mascota, input_foto_mascota} = req.body;
		console.log(req.body);
		if (validacion===false){
			connection.query ("INSERT INTO mascotas SET ?", {
				nombre_mascota: nombre_mascota,
				fecha_nacimiento_mascota: input_fecha_de_nacimiento_mascota,
				raza: raza_mascota,
				sexo_mascota: sexo_mascota,
				foto_mascota: input_foto_mascota
			},  (error, results)=>{
				if (error){
					console.log(error);
				} else{
					res.render('../views/formulario_adopcion.ejs', {
						alert: true,
						alertTitle: "Informacion subida de manera satisfactoria",
						alertMessage: "La informacion de la nueva mascota ha sido subida de manera satisfactoria",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'adopta'
					});
				}
			})	
		} else {
				res.render('../views/formulario_adopcion.ejs', {
						alert: true,
						alertTitle: "error",
						alertMessage: "Error al registrarse",
						alertIcon: "error",
						showConfirmButton: false,
						timer: 1500,
						ruta:''
					});
			};
		});

		app.post('/formulario_adopcion_mascota', async(req,res) => {
		const {input_documento_adoptante, input_nombre_adoptante, input_telefono_adoptante, input_sexo_adoptante, input_correo_adoptante, input_fecha_de_nacimiento_adoptante, input_direccion_adoptante, input_ingresos_mensuales, input_experiencia_mascotas_adoptante, input_tipo_mascota_adoptante, input_descripcion_adoptante} = req.body;
		console.log(req.body);
		if (validacion===false){
			connection.query ("INSERT INTO adoptante SET ?", {
				documento_adoptante: input_documento_adoptante,
				nombre_adoptante: input_nombre_adoptante,
				telefono_adoptante: input_telefono_adoptante,
				sexo_adoptante: input_sexo_adoptante,
				correo_electronico_adoptante: input_correo_adoptante,
				Fecha_de_nacimiento_adoptante: input_fecha_de_nacimiento_adoptante,
				direccion_adoptante: input_direccion_adoptante,
				ingresos_mensuales: input_ingresos_mensuales,
				experiencia_mascotas: input_experiencia_mascotas_adoptante,
				tipo_mascota_favorita: input_tipo_mascota_adoptante,
				descripcion_adoptante: input_descripcion_adoptante,
			},  (error, results)=>{
				if (error){
					console.log(error);
				} else{
					res.render('../views/formulario_adopcion.ejs', {
						alert: true,
						alertTitle: "Informacion subida de manera satisfactoria",
						alertMessage: "La informacion de la nueva mascota ha sido subida de manera satisfactoria",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:'adopta'
					});
				}
			})	
		} else {
				res.render('../views/formulario_adopcion.ejs', {
						alert: true,
						alertTitle: "error",
						alertMessage: "Error al registrarse",
						alertIcon: "error",
						showConfirmButton: false,
						timer: 1500,
						ruta:'adopta'
					});
			};
		});		

//login usuario	
	app.post("/auth", (req,res) => {
		const {input_documento, pass} = req.body;
		if (input_documento && pass){
			connection.query("SELECT * FROM usuario WHERE documento = ?",[input_documento], async(err,results)=>{
		
				if(err){
					res.send("Error " + err);
				}
				if (results.length === 0 || !(await bcryptjs.compare(pass, results[0].contrasena))){ //Verificar que el vector results no este vacio y verificar que la contrasena no coincide
					
					res.render('../views/login2.ejs', {
						alert: true,
						alertTitle: "Error",
						alertMessage: "Contraseña y/o usuario incorrecto",
						alertIcon: "error",
						showConfirmButton: false,
						timer: 1500,
						ruta:'login2'
					});
				} else {
				
					req.session.loggedin = true;
					req.session.nombre = results[0].nombre;
					req.session.rol=results[0].rol;
					
					res.render('../views/login2.ejs', {
						alert: true,
						alertTitle: "Bienvenido",
						alertMessage: "de nuevo",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 1500,
						ruta:''
					});
					
				}
			
		
		})
		}


	})


}

