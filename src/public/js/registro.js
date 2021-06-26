var contrasenas=[]
var correos=[]
var firstNames=[]
var lastNames=[]
var phones=[]

function validarCorreo()
{
	var getCorreo=document.getElementById('inputCorreo')
	var correo=getCorreo.value

	if (correo.indexOf(".")==-1)
	{
		alert("No es un correo valido")
		return false
	}

	else if (correo.indexOf(" ")!=-1)
	{
		alert("No es un correo valido")
		return false
	}

	else if (correo.indexOf("@")==-1)
	{
		alert("No es un correo valido")
		return false
	}

	else 
	{
		let inicio=correo.indexOf("@")
        if (inicio<3)
        {
     	    alert("No es un correo valido")
        }

        else 
        {
     	  let indicadora=false
     	  for (let i=inicio;i<correo.length-2;i++)
     	  {
     	 	  if (correo[i]=".")
     		  {
     			  indicadora=true
     		  }
     	  }
          return indicadora
        }
    }
}

function compararContrasena()
{
	var getContrasena=document.getElementById('inputContrasena')
	var contrasena=getContrasena.value
	
	var getReContrasena=document.getElementById('inputReContrasena')
	var reContrasena=getReContrasena.value
	
	if (contrasena==reContrasena)
	{
		return true
	}
	
	else 
	{
		alert("Las contraseñas no son iguales")
		return false
	}
}


function tamañoContrasena(){
	var getContrasena=document.getElementById("inputContrasena")
	var contrasena=getContrasena.value
	if (contrasena.length>8){
		return true
	}
	else {
		alert("la contraseña es muy corta")
		return false
	}
}





function validarDatos()
{
	
	if (validarCorreo() && compararContrasena() && tamañoContrasena())
	{

		validacion=true
		

	}
	
}

export default validarDatos;



