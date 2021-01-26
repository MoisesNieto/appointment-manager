import Citas  from './clases/citas.js'
import UI from './clases/ui.js';

import { 
    mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput,
    horaInput,
    sintomaInput, 
    formulario
} from './selectores.js'

let editando;

const citaOBJ ={
    mascota: '',
    propietario:'',
    telefono:'',
    fecha:'',
    hora: '',
    sintomas:''
}

 export function dastosCita(e){
    citaOBJ[e.target.name]=e.target.value;
    

}
//instnciando las clases 
const ui = new UI();
const administradorCitas= new Citas();



//valida y agrega una cita a la clase cita
export function nuevaCita(e){
    e.preventDefault();
    //destructuring
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaOBJ;

    //validar

    if (mascota ==='' || propietario ==='' || telefono ==='' || fecha ==='' || hora ==='' || sintomas===''){
        ui.imprimirHtml('todos los campo son obligatorio', 'error');
        return;
    }


    if (editando){
        ui.imprimirHtml('Editado correctamente');
        //pasa el objeto de la cita adicion
        administradorCitas.editarCita({...citaOBJ});

        //regredar el texto del boton al original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear citas';


        //quitar modo cita
        editando = false;

    }else{
        //generar un id
        citaOBJ.id = Date.now();

    //crear una nueva cita
    administradorCitas.agregarCita({...citaOBJ});
    ui.imprimirHtml('Se agrego correctamente');

    }
    
   
   

    //reinicar el objeto
    reiniciarObjeto();

    //reiniciarformulario
    formulario.reset();

    //mostra la cita
    ui.imprimirCita(administradorCitas);
   

}
 export function reiniciarObjeto(){
    citaOBJ.mascota = '';
    citaOBJ.propietario = '';
    citaOBJ.telefono = '';
    citaOBJ.fecha = ''; 
    citaOBJ.hora = '';
    citaOBJ.sintomas = '';

}


export function eliminarCita(id){

    //eliminar cita
    administradorCitas.eliminarCita(id) ;

    //mostar mensaje de eliminacion
    ui.imprimirHtml('Se ha borrado correctamente');

    //actualizar citas
    ui.imprimirCita(administradorCitas);
  
    
}
//carga los datos y modo edicion
 export function cargarEdicion(cita){
     
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomaInput.value= sintomas;

    citaOBJ.mascota = mascota;
    citaOBJ.propietario = propietario;
    citaOBJ.telefono = telefono;
    citaOBJ.fecha = fecha;
    citaOBJ.hora = hora;
    citaOBJ.sintomas = sintomas;
    citaOBJ.id = id;



    //cambiar el texto del formulario
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambio';

    editando = true;

 }