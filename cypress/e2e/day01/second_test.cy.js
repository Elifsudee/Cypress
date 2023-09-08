/// <reference types="cypress" />

context('My second Test',()=>{
    //descibe yerine contex de kullanabiliriz

    beforeEach('Her testten once calisacak', ()=> {
    cy.visit('/')

    })


    it('URL test',() => {
    
        cy.url().should('include','google')
        cy.url().should('include','https://www.google.com/')
    
    
    })




    
    it('Title test',() => {
    
        cy.title().should('include','Google')
        cy.title().should('equal','Google')
    
    })


    
    it('Search Test',() => {
    
        cy.get('#APjFqb').type('Cypress.io{enter}')

        //get():locate aliyoruz
        //type(): metin gonderiyoruz
        //{enter} tusuna bas
    
    
    })



    
    //skip testi yapmadan gecer
    it.skip('Search Test',() => {
    
        cy.get('#APjFqb' ,{timeout: 3000}).type('Cypress.io{enter}')

    
    })
    
    it('click',() => {

        //it.only : sadece bu testi calistirir

        cy.get('.gb_d').click()

    })
    
    
    })