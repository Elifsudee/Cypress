/// <reference types="cypress" />

describe('Check Boxes',()=>{

    it('Single CheckBox',() => {
        cy.visit('http://www.automationpractice.pl/index.php')

      //  cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    
     // cy.get('.sf-with-ul').first().click()
     //first(): Birden fazla web elementi varsa birinciyi sec demektir

     cy.get('.sf-with-ul').eq(0).click()
     //1 inciye tikla index gibi

     cy.get('#layered_category_4').should('not.be.checked')
     //not.be.checked bu locatedeki eleman tikli degil mi/tikli olmadigini test ettik

     cy.get('#layered_category_4').check()
     //chec() ile tiklama yaptik

     cy.get('#layered_category_4').should('be.checked')
     //tikli oldugunu kontrol ettik

     cy.get('#layered_category_4').uncheckcheck().should('not.be.checked')
     //tiklamyi kaldirip , kaldirildigini dogruladik




    })
    
    it('All CheckBoxses 1',() => {
    
       

            cy.visit('http://www.automationpractice.pl/index.php')

            cy.get('.sf-with-ul').eq(0).click()

           //butun checkboxlara tikladik
            cy.get("input[type='checkbox']").check()

            //tiklamalari hepsini kaldirmak icin
            cy.wait(3000)
            cy.get("input[type='checkbox']").uncheck()


    })


    it('All CheckBoxses 2',() => {

    
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-with-ul').eq(0).click()

        //1 kutuya tikla ve assert yap
        cy.get("input[type='checkbox']").eq(0).check().should('be.checked')

        //5 kutuya tikla ve assert yap
        cy.get("input[type='checkbox']").eq(4).check().should('be.checked')


      //12 kuyuya tikla ve assert yap
      cy.get("input[type='checkbox']").eq(11).check().should('be.checked')

//tiklamaleri kaldirmak icin ve assert yap
//uncheck():tiklamayi kaldirir
//shold('not.be.checked):tiklamanin kaldirildigini assert eder
cy.get("input[type='checkbox']").eq(0).uncheck().should('not.be.checked')




    })
    
    it.only('All Checkboxes 3',() => {

        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-with-ul').eq(0).click()

//eger check() de click kullanacaksak
cy.get("input[type='checkbox']").click({ multiple: true })
//clic()-- tek bir web elemete tiklar
//click({ multiple: true }) bu sekilde tum web elemntlere tiklar

cy.get("input[type='checkbox']").first().parent().should('have.class','checked')
//bu locatedeki birinci parentdeki class tiklandikdan sonra checked mi
//19 checkbox i tiklanmis mi diye assert etti

    })
    
    
    
    })