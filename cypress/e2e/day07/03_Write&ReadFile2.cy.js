/// <reference types="cypress" />

describe('Write&Read 2',()=>{

    it('Write&Read Json File',() => {
    
        cy.writeFile('./cypress/e2e/day07/04_JsonNotDeffteri.txt',{name:'Eliza',email:'eliza@example.com'})

    cy.readFile('./cypress/e2e/day07/04_JsonNotDeffteri.txt').then( (user) =>{
        expect(user.name).to.equal('Eliza')

    })
    
    })

})