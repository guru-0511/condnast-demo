/// <reference types="cypress" />

describe('verify the best Deals Online section', () => {
    before(()=>{
      cy.visit('/')
    })

    it('verify the page navigate to home page ',() => {
        cy.title()
          .should('eq', 'Online Shopping, Coupons & Discount Code at iprice Malaysia')
        })  

    it(' verify the 20 stores icons should appears' ,() => {
        cy.get("a[class='G d cP if oT kI g kL amp-carousel-slide amp-scrollable-carousel-slide']")
           .should('have.length', 20)
        })  

    it('verify the Top Trending Products count and its contains the valid attribute”',() => {
        cy.get("a[class='ba iI Y p I M bO oT eD kI d kL amp-carousel-slide amp-scrollable-carousel-slide']").should("have.attr" , 'data-vars-cgt')
        })    
  
})
