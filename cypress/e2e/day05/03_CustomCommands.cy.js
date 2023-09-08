
/// <reference types="cypress" />

describe('Custom Commands 2',()=>{

    it('Amazon Search',() => {
    
    cy.amazonSearch('iphone')

    cy.get('.a-color-state').should('include.text', 'iphone')

    cy.get('#twotabsearchtextbox').should('have.value','iphone')
     //html kodlarinndaki arama butonundaki value='iphone' degerini asset ettik

    cy.screenshot() //ekran resmini alir
    
    })
    

    
    
    
    })