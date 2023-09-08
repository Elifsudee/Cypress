
/// <reference types="cypress" />

describe('Before After',()=>{

    //before butun test dosyalarindan claslarindan once calisirher clasta 1 defa calisir

    before( () =>{  
        cy.log('Her Test dosyasindan once bir kere calisacaktir')

    })

     
    after( () =>{
        cy.log('Her test dosyasindan sonra 1 kere calisacak')
    })

    beforeEach ( () =>{
        cy.log('Her testten once 1 kere calisir')
    })

    afterEach( () =>{
        cy.log('Her testten sonra 1 kere calisacaktir')
    })

    

    it('Test case 1',() => {
    cy.log('Test Case 1') // cy. log ile ekrana yazdiririz
    
    
    })



    
    it('Test case 2',() => {
        cy.log('Test Case 2') 
        
    
    })
    
    
    
    })