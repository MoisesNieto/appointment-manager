//variable de campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomaInput = document.querySelector('#sintomas');
//ui interfez
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');


//class citas
class Citas{
 constructor(){
     this.citas = [];
 }

 agregarCita(cita){
     this.citas = [...this.citas,cita]
     console.log(this.citas);
 }

}

class UI {


    imprimirHtml(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert','d-block', 'col-12');
        if (tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-sucess')
        }
        //mostrar mensaje de error

        divMensaje.textContent= mensaje;

        //agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //quitar la alert despues de 3 segunsdo

        setTimeout(()=>{
            divMensaje.remove();
        }, 3000)
    }
    imprimirCita({citas}){

        this.limpiarHtml()

        citas.forEach(cita  => {
            const {mascota, propietario, telefono, fecha, hora, sintomas,id} = cita;
            
            const divCita = document.createElement('div');
            divCita.classList.add('card', 'p-3');
            divCita.dataset.id = id;
            
            //scripting de los elementos de citas
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weigt-bolder');
            mascotaParrafo.textContent= mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML= `<span class="font-weigth-bolder"> Propietario:</span> ${propietario}`;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML= `<span class="font-weigth-bolder"> telefono:</span> ${telefono}`;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML= `<span class="font-weigth-bolder"> fecha:</span> ${fecha}`;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML= `<span class="font-weigth-bolder"> hora:</span> ${hora}`;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML= `<span class="font-weigth-bolder"> sintomas:</span> ${sintomas}`;
           
           
           //boton para eliminar cita 
           const btnEliminar = document.createElement('button');
           btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
           btnEliminar.innerHTML= 'eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ';

           
            //Agregar los parrafo al div

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);


            //agregar la cita al html
            contenedorCitas.appendChild(divCita);
            
        });

    }

    limpiarHtml(){
        while(contenedorCitas.fristchild){
            contenedorCitas.removeChild(contenedorCitas.fristchild);
        }
    }

}

//instnciando las clases 
const ui = new UI();
const administradorCitas= new Citas();

eventListeners();
function eventListeners(){
//evenlistener 
        mascotaInput.addEventListener('input', dastosCita);
        propietarioInput.addEventListener('input', dastosCita);
        telefonoInput.addEventListener('input', dastosCita);
        fechaInput.addEventListener('input', dastosCita);
        horaInput.addEventListener('input', dastosCita);
        sintomaInput.addEventListener('input', dastosCita);
        formulario.addEventListener('submit', nuevaCita);
}
//objeto con la informacion de citas
const citaOBJ ={
    mascota: '',
    propietario:'',
    telefono:'',
    fecha:'',
    hora: '',
    sintomas:''
}
//agrega de los formulario a objeto
function dastosCita(e){
    citaOBJ[e.target.name]=e.target.value;
    

}
//valida y agrega una cita a la clase cita
function nuevaCita(e){
    e.preventDefault();
    //destructuring
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaOBJ;

    //validar

    if (mascota ==='' || propietario ==='' || telefono ==='' || fecha ==='' || hora ==='' || sintomas===''){
        ui.imprimirHtml('todos los campo son obligatorio', 'error');
        return;
    }
    //generar un id
    citaOBJ.id = new Date()

    //crear una nueva cita
    administradorCitas.agregarCita({...citaOBJ});
    console.log(administradorCitas)

    //reinicar el objeto
    reiniciarObjeto();

    //reiniciarformulario
    formulario.reset();

    //mostra la cita
    ui.imprimirCita(administradorCitas);

}
function reiniciarObjeto(){
    citaOBJ.mascota = '';
    citaOBJ.propietario = '';
    citaOBJ.telefono = '';
    citaOBJ.fecha = ''; 
    citaOBJ.hora = '';
    citaOBJ.sintoms = '';

}