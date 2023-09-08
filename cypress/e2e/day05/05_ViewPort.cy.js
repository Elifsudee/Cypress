
/// <reference types="cypress" />

describe('View Port',()=>{

    it('',() => {
    
    cy.visit('https://amazon.com')
    cy.viewport('iphone-8')
    
    })
    
    it('',() => {
    
        cy.visit('https://google.com')
        cy.viewport('macbook-11')
    
    })
    
    it.only('Custom Scren',() => {
    
        cy.visit('https://google.com')
        cy.viewport(1500, 1000)
    
    })
    
    })