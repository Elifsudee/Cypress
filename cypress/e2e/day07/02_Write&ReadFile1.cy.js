
/// <reference types="cypress" />

describe('Write&Read File',()=>{

    it('',() => {
    
    cy.writeFile('./cypress/e2e/day07/NotDeffteri.txt','CYPRESS NOTS\n')
    cy.writeFile('./cypress/e2e/day07/NotDeffteri.txt','1) Cypress Install\n' ,{flag: 'a+'})//{flag: 'a+'} digerini silmeden yazmasi icin
    cy.writeFile('./cypress/e2e/day07/NotDeffteri.txt','2) Plulins ',{flag: 'a+'})

    //\n ==>alt satira gecmesini saglar
    //{flag: 'a+'} satiri dosyaya kaydeder
    
    })



    
    it('Read File',() => {
    cy.readFile('./cypress/e2e/day07/NotDeffteri.txt').should('contain','Plulins')
        
    
    })
    
    
    
    })