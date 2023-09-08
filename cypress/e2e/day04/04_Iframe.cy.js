
/// <reference types="cypress" />

describe('Iframe',()=>{

    it('Iframe Test',() => {
    
    cy.visit('https://the-internet.herokuapp.com/iframe')

    /*
    1=plugin indir
    2=npmjs.com dan cypres-iframe yaz plugini al
    npm install -D cypress-iframe

    3=import plugin
    //import 'cypress-iframe'; support da e2e nin icine koyduk

    4=bu islemlerden sonra cy.frameLoaded() ve cy.iframe komutunu kullanacagz

    */

    cy.frameLoaded('#mce_0_ifr')//iframe ulastik
    //cy.frameLoaded('#mce_0_ifr') iframe yeni tanimladik

    cy.iframe().find('p').clear()
    //cy.iframe() iframe git demek
    //find('p') p tagini bul
    //clear() metni temizle

      
    cy.iframe().find('p').type('Cypress')

    cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()

    
    })
    
    it('',() => {
    
        
    
    })
    
    
    
    })