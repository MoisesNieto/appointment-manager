import {eliminarCita,cargarEdicion} from '../funciones.js';
import {contenedorCitas} from '../selectores.js';

class UI {


    imprimirHtml(mensaje, tipo){
        const divMensaje = document.createElement('div');

        divMensaje.classList.add('text-center','alert','d-block', 'col-12');
        if ( tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success')
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
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            
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
           
           btnEliminar.onclick = () => eliminarCita(id);

           // añadir buton para editara
           const btnEditar = document.createElement('button');
           btnEditar.classList.add('btn','btn-info');
           btnEditar.innerHTML ='Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
           btnEditar.onclick= () => cargarEdicion(cita);
           
            //Agregar los parrafo al div

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);


            //agregar la cita al html
            contenedorCitas.appendChild(divCita);
            
        });

    }

    limpiarHtml(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }

}
export default UI;