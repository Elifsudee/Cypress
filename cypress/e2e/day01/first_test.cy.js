

/// <reference types="cypress" />

describe('My First Test',() => {

    //describe :tanimlamak demek testi tanimlamak icin kullaniliyor.mocha dan geliyor

    it('URL Test ',() => {
    
        cy.visit('https://www.google.com/')
        //visit(URL) urle gitti

        cy.url().should('include','google')
        //should ile assertion islemi icin kullanilir google iceriyor mu
        //include:icermek demek



    
    })
    
    it('Title Test',() => {

        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        cy.title().should('include','Goog')
        //title sayfanin titleni basligini alir

   cy.title().should('eq','Google') 
   //eq esit mi demek    

   
    
    })
    
    
    
    })