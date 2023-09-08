/// <reference types="cypress" />

describe('Suggested Elemets 2',()=>{

    it('Test Case ',() => {
    
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('#search_query_top').type('Dress')
        cy.get('.ac_results > ul > :nth-child(2)').click()

        cy.get('h1').should('be.visible')//dogrulsma
    
    })

})