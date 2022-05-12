/// <reference types="cypress" />

describe('verify the coupon page section', () => {
    before(()=>{
      cy.visit('/coupons/')
    })

    it('verify the page navigate to home page ',() => {
        cy.title()
          .should('eq', 'Get Exclusive Coupons, Discount Codes & Vouchers in 2022 | iPrice Malaysia')
        })  

    it(' verify the top store section should appears' ,() => {
        cy.get("header h2").contains('Top Stores')
        cy.get("[data-uat='top-stores']").first().should("be.visible")
        cy.get("[data-uat='coupon-store-item']").should('have.length',14)
        })  

    it('verify the Top Stores contains Url are active”',() => {
        cy.get('div p[title]').then(($test)=>{
            for ( let i =0 ; i<$test.length; i++){ 
                const txt =  ($test[i].outerText).toLowerCase().split(' ').slice(-1).join(' ')
                cy.get('[data-vars-cgt="click_coupon_top_stores_item"]').eq(i).click() 
                cy.url().should('include',txt)
                cy.wait(2000)
                }
         })
    })
  
})
