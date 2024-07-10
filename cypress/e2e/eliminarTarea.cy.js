import {gestionTarea} from "../pageObjects/GestionTarea";
describe('Eliminar Tarea', () => {
    beforeEach(()=>{

        gestionTarea.navigateTodo()
    })
    it('Eliminar tarea', () => {
        gestionTarea.eliminarTarea()
    });
    it('Eliminar varias tareas', () => {
       gestionTarea.eliminarVariasTareas()
    });

});