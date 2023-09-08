/// <reference types="cypress" />

describe('Allerts',()=>{

    it('Allert Test',() => {
    
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.wait(2000)
    cy.get(':nth-child(1) > button').click()

    //cypress otomatik olarak alert otomatik olarak tamam butonuna tiklar

    cy.get('#result').should('have.text','You successfully clicked an alert')
    
    })


    
    it('Accept Alert Test',() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.wait(2000)

        cy.get(':nth-child(2) > button').click()
        //iki secenek var iptal ve tamam cypress otomatik olarak tamam butonuna tiklar

        cy.get('#result').should('have.text','You clicked: Ok')



     
    
    })
    
    


    it('Dismiss Alert ',() => {
        //iptal yazacagiz
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.wait(2000)

        cy.get(':nth-child(2) > button').click()
        //cypress otomaik olarak tama butonuna tikladi

        //on komutu ile iptal e tiklayacagiz
        //on()-->jQuery bir fonksiyondur,browserda acilan pencelerin kontrolu icin kullanilir

        cy.on('window:confirm', () =>{
            return false //tamam a tiklama false tikla

            //return true -->default olarak tikla demek
            
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
        
    
    })
    



    it.only('Alert Text ',() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.wait(2000)
      //  $windowsElement --propta bilgi girer

        cy.window()//pop up pencerelerini kontrol ediyoruz
        .then(($windowsElement) =>{  //metin gondercegiz diyoruz
            cy.stub($windowsElement, 'prompt').returns('Cypress')

            cy.wait(2000)

        })
        cy.get(':nth-child(3) > button').click()

    
      cy.get('#result').should('have.text','You entered: Cypress')

    

        
    
    })
    
    })