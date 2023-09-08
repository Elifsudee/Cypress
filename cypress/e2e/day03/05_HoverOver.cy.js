/// <reference types="cypress" />
//mausu locaet ettigimiz yere gotur
describe('HoverOver',()=>{

    it('Test Case',() => {
    
        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')

        cy.wait(3000)

       cy.contains('Change country/region.').click()

    //   cy.get('#icp-dropdown').select('Turkey (Türkiye)'),{force: true}

    
    })
    
    
    
    
    })