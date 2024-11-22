 /*
 Este ejercicio puede ser utilizado como ejemplo para implementar controles de verificación de DATOS ingresados en un formulario de HTML5. Aquí puede observar algunos procedimiento simples utilizando "Expresiones Regulares" que suelen aplicarse para validar la consistencia de los datos capturados y para asegurar que los datos estén correctos antes de su almacenamiento o procesamiento.
 ----------------------
 Tomado de varios sitios de Internet y 
 Adaptado por Uriel Castañeda Sierra
 Septiembre de 2020
 con fines didácticos y educativos
 ______________________
 */
   
        
    //------------------------------------------------------------
    //-------------- definimos funciones para valiación de datos
    // -- Variables para control de cada dato correcto.
    var mostrarResultadoValidacion=true;
    var nombreOk=false;
    var apellidoOk=false;
    var edadOk=false;
    var fechaOk=false;
    var emailOk=false;
    var generoOk=false;
    var telefonoOk=false;
    var tipotelefonoOk=false;
    var mensajeOk=false;
    var checktratamientodatosOk=false;    
    var edadMinima=10;
    var edadMaxima=99;
    var longitudMinimaTelefono=7;
    var longitudMaximaMensaje=1000;
    // -- Definición de EXPRESIONES REGULARES para validar datos    
    var expRegNumeroEntero=/^-?[0-9]*$/;
    var expRegNumeroEnteroPositivo=/^[0-9]*$/;
    var expRegFecha=/^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})$/;
    var expRegTxtNombre=/^[A-Z~-ÿ]{1}[~-ÿ\s\w\.\'-]{1,}$/i;
    var expRegTxtEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
                

        //------------------------------------------------------------
        // Definimos las funciones encargadas de activar el ESTILO
        // dinámico al recibir o al perder el enfoque. 
        // también despues de validar el resultado correcto o incorrecto
        // ---------
        // -- Aplica estilo para CAPTURA de datos (al enfocar la celda)
        function estiloINGRESO(){
            this.style.backgroundColor="cyan";
        }
            // -- Aplica estilo al validar dato CORRECTO
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
            // -- Aplica estilo al validar dato INCORRECTO
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
        
        
        
        // -- Activa Imagen de dato Correcto o Incorrecto
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
        
        //------------------------------------------------------------
        // Validamos que el campo NOMBRE esté correctamente ingresado
        // el campo no podrá estar vacío y debe tener mínimo dos
        // caracter, el primero de ellos debe ser una letra
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
        }         //---- final function validarNombre

        //------------------------------------------------------------
        // Validamos que el campo APELLIDO esté correctamente ingresado
        // Se aplican las mismas validaciones del campo NOMBRE
        function validarApellido(){
            var objetoApellido=document.getElementById("apellido");
            if ((expRegTxtNombre.test(objetoApellido.value))==true){
                apellidoOk=true;
                estiloCORRECTO(objetoApellido);
            }
            else {
                apellidoOk=false;
                estiloINCORRECTO(objetoApellido);
            }
        }         //---- final function validarApellido

        //------------------------------------------------------------
        // Validamos que el campo TELÉFONO esté correctamente ingresado
        // y que Cumpla con el formato
        function validarTelefono(){
            var objetoTelefono=document.getElementById("telefono");
            if ((objetoTelefono.value!='') && 
                (objetoTelefono.value.length>=longitudMinimaTelefono) &&
                expRegNumeroEnteroPositivo.test(objetoTelefono.value)){
                telefonoOk=true;
                estiloCORRECTO(objetoTelefono);
            }
            else {
                telefonoOk=false;
                estiloINCORRECTO(objetoTelefono);   
            }
        }         //---- final function validarTeléfono
       
        //------------------------------------------------------------
        // Validamos que el campo MENSAJE esté correctamente ingresado
        // y que Cumpla con el formato y las restricciones establecidas
        function validarMensaje(){     
            var objetoMensaje=  document.miniformulario.mensaje;
            if ((objetoMensaje.value!='') && 
                (objetoMensaje.value.length<=longitudMaximaMensaje))
            {
                mensajeOk =true;  
                estiloCORRECTO(objetoMensaje, document.getElementById("img_valida_mensaje"));
            }   
            else {
                mensajeOk=false;
                estiloINCORRECTO(objetoMensaje, document.getElementById("img_valida_mensaje"));   
            }
        }         //---- final function validarMensaje
                       
        //------------------------------------------------------------
        // Validamos que el campo EDAD esté correctamente ingresado
        // y que esté dentro del rango exigido
        function validarEdad(){
            var objetoEdad=document.getElementById("edad");
            if ((objetoEdad.value>edadMinima) && (objetoEdad.value<edadMaxima) && expRegNumeroEnteroPositivo.test(objetoEdad.value)){
                edadOk=true;
                estiloCORRECTO(objetoEdad);
            }
            else {
                edadOk=false;
                estiloINCORRECTO(objetoEdad);   
            }
        }         //---- final function validarEdad
    
        //------------------------------------------------------------
        // Validamos que el Género esté correctamente ingresado
        // se verifica que  haya sido elegida alguna de las opciones disponibles
        function validarOpcionGenero(){
            generoOk = false; //variable para  comprobación
            var objetoGenero = document.miniformulario.genero;  //array de elementos
            var elegido = -1; //número del elemento elegido en el array
            for (i=0;i<objetoGenero.length;i++) //bucle de comprobación
            {  
               if (objetoGenero[i].checked == true) 
               {
                    generoOk = true ;
                    elegido = i ; //número del elemento elegido en el array
               }
             }
            if (generoOk == true) //mensaje de formulario válido
            { 
               OpcionElegida = objetoGenero[elegido].value;
               ActivaImagenValidacion(document.getElementById("img_valida_genero"),true);
            }
            else { //no ha selecionado ninguna de las opciones.
                ActivaImagenValidacion(document.getElementById("img_valida_genero"),false);
            }
            
        }         //---- final function validarGenero
        
        //------------------------------------------------------------
        // -- Validamos que el campo EMAIL esté correctamete ingresado
        function validarEmail(){
            var objetoEmail=document.getElementById("email");
            var email=objetoEmail.value.toLowerCase(); 
            email=comprobarAtEmail(email);
            if ((expRegTxtEmail.test(email))==true) {
                emailOk=true;
                objetoEmail.value = email;
                estiloCORRECTO(objetoEmail);
            }
            else {
                emailOk=false;
                estiloINCORRECTO(objetoEmail);   
            }
        }        //---- final function validarEmail
        
        // -- convierte texto con caracteristicas del sistema AT&T
        function comprobarAtEmail(email){
            var expresion=/\sat\s/g;
            return email.replace(expresion,'@');
        }

        //------------------------------------------------------------
        // Validamos que el campo FECHA esté correctamente ingresado
        // y que sea una fecha válida. El formato es dd/mm/aaaa
        function validarFecha(){
            var objetoFecha=document.getElementById("fecha");
            if ((objetoFecha.value!='') &&   objetoFecha.value.match(expRegFecha) && existeFecha(objetoFecha.value)){
                fechaOk=true;
                estiloCORRECTO(objetoFecha);
            }
            else {
                fechaOk=false;
                estiloINCORRECTO(objetoFecha);   
            }
        }         //---- final function validarFecha
           
        //  --- función auxiliar para verificar que la fecha sea válida
        //      es decir, ue esta exista en el calendario segun la 
        //      cantidad de días de cada mes
        function existeFecha(fecha){
            var fechaf = fecha.split("/");
            var day = fechaf[0];
            var month = fechaf[1];
            var year = fechaf[2];
            // si el mes  es menor que 1 ó mayor de 12, retorna error
            if (month < 1 || month > 12  ) return false; 
            else {
                // verificamos que el día no supere el máximo del mes
                var date = new Date(year,month,'0');
                
                if(day < 1 || (day-0)>(date.getDate()-0)){
                    //-- el día es menor que 1 o mayor que el día máximo 
                    return false;  
                }
                else return true; //-- la fecha es correcta
            }
        }
            
        
        function validarSelectTipoTelefono() {
         var listaOpciones = document.getElementById("tipo_telefono");
         if (listaOpciones.selectedIndex == null || listaOpciones.selectedIndex == 0) { 
            // No ha seleccionado ningún dato de las opciones predefinidas 
            tipotelefonoOk=false; 
            estiloINCORRECTO(listaOpciones, document.getElementById("img_valida_tipo_telefono" ));                 
            }
         else { 
            tipotelefonoOk=true; 
            estiloCORRECTO(listaOpciones, document.getElementById("img_valida_tipo_telefono")); 
            }		
         }
        
        //------------------------------------------------------------
        // Validamos que el campo de AUTORIZACIÓN tratamiento de datos para contacto
        // El CheckBox debe estar seleccionado para permitir el envío del formulario.   
      function validarCheckBoxAutorizacion() {
         var opcion = document.miniformulario.autoriza_tratamiento_datos; //accede al botón
         if (opcion.checked == true) { //botón seleccionado
            checktratamientodatosOk = true ;
            ActivaImagenValidacion(document.getElementById("img_valida_Autorizacion_tratamiento_datos"),true);
             
            }
         else {  //botón no seleccionado
            alert("El formulario no podrá enviarse. \n Debe aceptar las condiciones para poder enviar el formulario");
            checktratamientodatosOk = false ;
            ActivaImagenValidacion(document.getElementById("img_valida_Autorizacion_tratamiento_datos"),false);
             
            }
         }  
        
        

    //------------------------------------------------------------
    //  Función utilizada para iniciar el proceso de validación.
    //------------------------------------------------------------
    function validarDatos(){
        var msgAlerta;  
        
        //----------------------
        //------ Ejecutamos el bloque de validaciones de los campos que 
        //       componen el formulario

        validarNombre();
        validarApellido();
        validarEdad();
        validarFecha();
        validarEmail();
        validarOpcionGenero();
        validarTelefono();
        validarSelectTipoTelefono();
        validarMensaje();
        validarCheckBoxAutorizacion();  
        
        
        //-----  analizamos el resultado de las validaciones y 
        //-----  mostramos los mensajes correspondientes
        
        if (nombreOk && apellidoOk && edadOk && fechaOk && emailOk && 
            generoOk && telefonoOk && tipotelefonoOk && mensajeOk && checktratamientodatosOk )
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
            "  - Apellido      :  " + (apellidoOk ? "OK" : "error") + "\n" +
            "  - Edad          :  " + (edadOk ? "OK" : "error") + "\n" +
            "  - Fecha Nac     :  " + (fechaOk ? "OK" : "error") + "\n" +
            "  - Género        :  " + (generoOk ? "OK" : "error") + "\n" + 
            "  - e-mail        :  " + (emailOk ? "OK" : "error") + "\n" +   
            "  - Teléfono      :  " + (telefonoOk ? "OK" : "error") + "\n" +   
            "  - Tipo Teléfono :  " + (tipotelefonoOk ? "OK" : "error") + "\n" +   
            "  - Mensaje       :  " + (mensajeOk ? "OK" : "error") + "\n" +
            "  - Autoriza Tratamiento de Datos:  " + (checktratamientodatosOk ? "OK" : "error") ;         
          
            if(mostrarResultadoValidacion) alert (msgAlerta);
            return false;
        }
    }


            
            // -- Aplica estilo al validar dato INCORRECTO
        function estiloORIGINAL(IdElemento, IdImagen){
            var objetoInput=document.getElementById(IdElemento);
            objetoInput.style.backgroundColor="transparent";   
            if (IdImagen == undefined) 
            {
                objetoInput.nextSibling.src=""; 
                objetoInput.nextSibling.style.visibility = 'hidden';
        //                     alert("revisamos.5..." + IdElemento); 
            }
            else {
                document.getElementById(IdImagen).src=""; 
                document.getElementById(IdImagen).style.visibility = 'hidden';
            } 
        }



    //------------------------------------------------------------
    //  Función Resetear el contenido de un formulario
    //  teniendo en cuenta en dejar los estilos definidos por defecto
    //------------------------------------------------------------
    function resetearDatos(){
       // var msgAlerta;  
        if (confirm("Desea Limpiar el Formulario?"))
        {
           //--  restablecemos los formatos de inicio
           estiloORIGINAL("nombre");
           estiloORIGINAL("apellido");
           estiloORIGINAL("edad");
           estiloORIGINAL("fecha");
           estiloORIGINAL("email");
           estiloORIGINAL("telefono");
           estiloORIGINAL("tipo_telefono", "img_valida_tipo_telefono");
           estiloORIGINAL("mensaje", "img_valida_mensaje");
           ActivaImagenValidacion(document.getElementById("img_valida_genero"));
           ActivaImagenValidacion(document.getElementById("img_valida_Autorizacion_tratamiento_datos"));

           //document.getElementById("miniformulario").reset();
          document.miniformulario.reset();
         
        }
    }