/// <reference types="cypress" />

describe('Super Domain',()=>{

    it('Test Case 1',() => {
        cy.visit('https://www.amazon.com/') 

        cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')
       
    //ayni domain icrisindeki ikinci sayfalara gidebilirsiniz fakat ayni test clasinda 
    //farkli sayfalara gidemazsiniz
    
    })
    it.skip('Test case 2',() => {
        cy.visit('https://www.cypress.com.io')
        
    
    })

    
    it('Test case 3',() => {
        cy.visit('https://www.google.com/')
        
    
    })
    
    
    
    })