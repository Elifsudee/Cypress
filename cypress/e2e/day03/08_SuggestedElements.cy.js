/// <reference types="cypress" />

describe('Suggested Elements',()=>{

    //suggested elements arama yapinca altinda cikan benzer aramalr 

    it('Test case 1',() => {
    
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Yahoo')
    cy.get('li span b').contains('mail').click()

    
    })
    
    it.skip('',() => {
        cy.visit('https://www.automation.com/index.php')
        
    
    })
    
    
    
    })