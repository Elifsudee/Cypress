/// <reference types="cypress" />

describe('Koala Resort Hotel',()=>{

    it('Login in Testi',() => {
    
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    //seleniumdaki get gibi

    //1 yol
    //cy.get('#navLogon > .nav-link').click()

    //2 yol

    cy.contains('Log in').click()
     //contains():DOM da login texini bul

     cy.url().should('include','Account/Logon')

     //username:Manager
     cy.get('#UserName').type('Manager')
      

     //password:Manager1!
     cy.get('#Password').type('Manager1!')

     cy.get('#btnSubmit').click()

    //2 yol
   // cy.get('#Password').type('Manager1!{enter}')
    })
    
    
    
    
    })