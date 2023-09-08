/// <reference types="cypress" />

describe('Koala Resort Hotel',()=>{

    it('Login Test',() => {
    
        cy.visit('https://qa-environment.koalaresorthotels.com/')
         //1=contains('Text')
      //  cy.contains('Log in').click()

   
      //2=contains('locator','Text')
      // cy.contains('[class="nav-link"]','Log in').click()

       cy.contains('li' ,'Log in').click()

       //3=contains('text')
       cy.contains('log in',{matchCase:false}).click()

       //matchcase buyuk kucuk harf dikkate almadan metin olarak lo gin icereni arar
       //extrra bir method yazarken {} arasina yaziyoruz
    

       //Assertion

       //1=have.text==login iceriyor mu
       cy.get('#navLogon > .nav-link').should('have.text','Log in')
       //locate edilen yerdeki metinde 'Log in' yaziyor mu/var mi
       
       //2yol cy.url.sholud()
       
     cy.url().should('include','Account/Logon')

     //3yol:be.visible
     cy.get('.row > .mb-4').should('be.visible')


     //4yol:
     cy.title().should('eq','KoalaResortHotels - Log in')


     //5 inculde.text 
     cy.get('#navLogon > .nav-link').should('include.text','Log in')
     //locate edilen yerdeki metin 'Log in' iceriyor mu


     //Toplam link sayisi
     cy.get('li a').should('have.length',29)
     //sayfada 29 link var mi bunu assert ettik

     //find():Belirli bir html seciminin alt elemanlarini bulmak icin
     //cy.find() seklinde kullanilmaz
     //cy.get().find() sekilnde kullanilir
     //li taginin altinda su locateli eleman var mi
     cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')


     //within()
     cy.get('div.categories').within( () =>{
        cy.get('a[href="/Rooms/320"]').click()

        //parent:div.categories
        //child: a[href="/Rooms/320]

     })

/*
Not:Web elementleri ilk olarak get ile bulacagiz .Eger get() ile bulamazsak

find() ile deneyecegiz. onunla da bulmazsak within() ile bulaccagiz

*/





    })
    

    
    
    
    })