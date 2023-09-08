
/// <reference types="cypress" />

describe('Multiple Windows',()=>{

    it('Removing Attibute',() => {
    
    cy.visit('https://the-internet.herokuapp.com/windows')


//once diger sayfaya gecmemsi icin attributeni siliyoruz
    cy.get('.example > a').invoke('removeAttr','target').click()

    cy.get('h3').should('have.text' ,'New Window')
    
    })
    
    //2 yol yeni pencereryi ayni sayfa icinde acmasini saglamis olduk
    it.only(' New Url',() => {
    
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element) =>{
            const newUrl=element.prop('href')

            //prop() ile href degerini aldik

            cy.visit(newUrl)
        } )
    
    })
    
    
    
    })