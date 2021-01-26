import {dastosCita, nuevaCita} from '../funciones.js';
import { 
    mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput,
    horaInput,
    sintomaInput, 
    formulario
} from '../selectores.js'

 export class App {

    constructor (){
        this.initApp();

    }

    initApp(){
        mascotaInput.addEventListener('input', dastosCita);
        propietarioInput.addEventListener('input', dastosCita);
        telefonoInput.addEventListener('input', dastosCita);
        fechaInput.addEventListener('input', dastosCita);
        horaInput.addEventListener('input', dastosCita);
        sintomaInput.addEventListener('input', dastosCita);
        formulario.addEventListener('submit', nuevaCita);

    }
}