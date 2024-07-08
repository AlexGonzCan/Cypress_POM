import {marcarTarea} from "../pageObjects/GestionTarea";
describe('Maracar tareas', () => {
    beforeEach(()=>{
        cy.visit(marcarTarea.web)
    })
    it('Completar tarea', () => {
        marcarTarea.completarTarea()

    });
});