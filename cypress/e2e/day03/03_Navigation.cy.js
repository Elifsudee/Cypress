/// <reference types="cypress" />

describe('Navigation',()=>{



    it('Back, Forward ,Refresh',() => {
    
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(3000)

        cy.get('#navLogon > .nav-link').click()

        cy.wait(3000)

        cy.go('back') //go ('back') geri gel
         cy.go(-1)
         //-1 onceki syfaya git

      cy.wait(3000)
      cy.go('forward')
      cy.go(1)

    cy.wait(3000)

    cy.reload()//sayfayi yeniler refresh



    
    })




    
    it.only('Chaing Navigation',() => {
    
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(3000)

        cy.get('#navLogon > .nav-link').click()

        cy.wait(3000)

        cy.go('back').go('forward').go(-1).go(1)

        cy.reload(true) //sayfayi cashde(hafizadan) degil yeniden yukler
    
    })
    
    
    
    })