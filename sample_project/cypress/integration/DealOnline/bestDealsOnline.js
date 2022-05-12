import { selectors } from "../../selectors/selectors"

Given('I navigate to ipricegroup home page',()=>{
    cy.visit('/')
})
Then('verify the title should appears',()=>{
    cy.title()
          .should('eq', selectors.element.homeTitle)
}) 
And('verify the 20 stores icons should appears',()=>{
    cy.get(selectors.element.storeList)
    .should('have.length', 20)

})
And('verify the Top Trending Products count and its contains the valid attribute', ()=>{
    cy.get(selectors.element.trendingProductsList).should("have.attr" , 'data-vars-cgt')
})  
