/// <reference types="cypress" />

describe('Simple Api TEst',()=>{

    const requestURL='https://jsonplaceholder.cypress.io/comments'
    

    it('Header Assert 1',() => {

        cy.request(requestURL).its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
  
    
    })


    
    it('Header Assert 2',() => {
    
        cy.request( {
            url:requestURL,
            method:'GET' })
            .its('headers').its('content-type')
            .should('include','application/json; charset=utf-8')
      
    
    })
    
    
    
    })