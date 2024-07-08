import {gestionTarea} from "../pageObjects/GestionTarea";
describe('Eliminar Tarea', () => {
    beforeEach(()=>{

        cy.visit(gestionTarea.web);
    })
    it('Eliminar tarea', () => {
        gestionTarea.eliminarTarea()
    });
    it('Eliminar varias tareas', () => {
       gestionTarea.eliminarVariasTareas()
    });

});