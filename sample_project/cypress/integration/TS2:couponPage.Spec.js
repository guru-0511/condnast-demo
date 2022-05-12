/// <reference types="cypress" />

const { selectors } = require("../selectors/selectors")

describe('verify the coupon page section', () => {
    before(()=>{
      cy.visit('/coupons/')
    })

    it('verify the page navigate to home page ',() => {
        cy.title()
          .should('eq', selectors.element.couponsPage)
          
        })  

    it(' verify the top store section should appears' ,() => {
        cy.get("header h2").contains('Top Stores')
        cy.get(selectors.element.topStoresTitle).first().should("be.visible")
        cy.get(selectors.element.couponStoreItem).should('have.length',14)
        })  

    it('verify the Top Stores contains Url are active”',() => {
        cy.get(selectors.element.topStoreList).then(($test)=>{
            for ( let i =0 ; i<$test.length; i++){ 
                const txt =  ($test[i].outerText).toLowerCase().split(' ').slice(-1).join(' ')
                cy.get(selectors.element.topStoreIcon).eq(i).click() 
                cy.url().should('include',txt)
                cy.get(selectors.element.breadcrumb).first().click()
                }
         })
    })
  
})
