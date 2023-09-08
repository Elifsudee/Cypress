/// <reference types="cypress" />

describe('Selector Examples',()=>{

    it.skip('Css Selectors',() => {
    
    cy.visit('https://www.amazon.com/')
    
    //1 =Bay tag name

    cy.get('input')

    //2=By id
     cy.get('#twotabsearchtextbox')  //id de # kullanilir

    //3=By Class

    cy.get('.nav-search-field ')   //class da nokta  kullanilir

    //4=By Attributename

    cy.get("input[type='text']")

    //5=By 2 Attribute

    cy.get("[type='text'][id='twotabsearchtextbox']")

    })
    


    it('Xpath',() => {
    
        cy.visit('https://www.google.com')

        //6=By xpath
        cy.xpath("//a[@class='gb_d']").should('include.text','Gmail')
        // /// <referance types ='cypress-xpath />
        //x path algilsnmsx ise 1 inci satira ustteki kodu yazabilir siniz

        // require('cypress-xpath')
        //yukaridaki kodu e2e.cy.js dosyasina eklayacagiz
        
        
    
    })
    
    
    
    })