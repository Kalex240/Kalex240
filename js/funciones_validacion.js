    var mostrarResultadoValidacion=true;
    var nombreOk=false;
    var apellidoOk=false; 
    var expRegTxtNombre=/^[A-Z~-ÿ]{1}[~-ÿ\s\w\.\'-]{1,}$/i;
    var expRegTxtApellido=/^[A-Z~-�]{1}[~-�\s\w\.\'-]{1,}$/i;

        function estiloCORRECTO(inputElement, imagen){
            inputElement.style.background='transparent';
            if (imagen == undefined)
            {   inputElement.nextSibling.src="imagenes/tick_ok_sign_4190.jpg"; 
                inputElement.nextSibling.style.visibility = 'visible';
            }
            else { 
                imagen.src="imagenes/tick_ok_sign_4190.jpg"; 
                imagen.style.visibility = 'visible';
            }
        }

        function estiloINCORRECTO(inputElement, imagen){
            inputElement.style.backgroundColor="LightCoral";
            if (imagen == undefined)
            {
                inputElement.nextSibling.src="imagenes/wrong.png"; 
                inputElement.nextSibling.style.visibility = 'visible';
            }
            else {
                imagen.src="imagenes/wrong.png";      
                imagen.style.visibility = 'visible';
            }
        }

        function ActivaImagenValidacion(inputElement, validacion){
            if (validacion != undefined)
            { 
                inputElement.style.visibility = 'visible';
                if (validacion == true)
                    inputElement.src="imagenes/tick_ok_sign_4190.jpg";          
                else 
                    inputElement.src="imagenes/wrong.png";
            }
            else {
                inputElement.style.visibility = 'hidden';
                inputElement.src="";
            }
        }

        function validarNombre(){
            var objetoNombre = document.getElementById("nombre");
            
            if ((expRegTxtNombre.test(objetoNombre.value)) == true){
                nombreOk = true;
                estiloCORRECTO(objetoNombre);
            }
            else {
                nombreOk = false;
                estiloINCORRECTO(objetoNombre);
            }
        }

        function validarApellido(){
            var objetoApellido=document.getElementById("apellido");
            if ((expRegTxtApellido.test(objetoApellido.value))==true){
                apellidoOk=true;
                estiloCORRECTO(objetoApellido);
            }
            else {
                apellidoOk=false;
                estiloINCORRECTO(objetoApellido);
            }
        }

    function validarDatos(){
        var msgAlerta;  
        validarNombre();
        validarApellido();
        if (nombreOk && apellidoOk  )
        {
            msgAlerta = "Los datos ingresados han sido validados y están todos correctos. \nSu formulario ya podrá ser procesado....\n";
            if(mostrarResultadoValidacion) alert (msgAlerta);   
            return true;
        }
        else {   
            msgAlerta = "Presenta ERRORES en el registro de información.\n" +
            "Los datos que debe rectificar son: \n" +
            "---------------------------------------\n" +
            "  - Nombre        :  " + (nombreOk ? "OK" : "error") + "\n" +
            "  - Apellido      :  " + (apellidoOk ? "OK" : "error") + "\n" ;       
        
            if(mostrarResultadoValidacion) alert (msgAlerta);
            return false;
        }
    }

        function estiloORIGINAL(IdElemento, IdImagen){
            var objetoInput=document.getElementById(IdElemento);
            objetoInput.style.backgroundColor="transparent";   
            if (IdImagen == undefined) 
            {
                objetoInput.nextSibling.src=""; 
                objetoInput.nextSibling.style.visibility = 'hidden';
            }
            else {
                document.getElementById(IdImagen).src=""; 
                document.getElementById(IdImagen).style.visibility = 'hidden';
            } 
        }

    function resetearDatos(){
        //var msgAlerta;  
        if (confirm("Desea Limpiar el Formulario?"))
        {
        estiloORIGINAL("nombre");
        estiloORIGINAL("apellido");
        document.miniformulario.reset();
        
        }
    }