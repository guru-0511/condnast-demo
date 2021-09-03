/// <reference types="cypress" />


describe("Book A ticket", () => {
before(()=>{
    cy.visit("/")
})

    it("verify the URL navigate to home scrren.", () => {
        cy.title()
        cy.get('[data-cy=mmtLogo]').should('be.visible')
    })
    it("Select Round trip option", () => {
        cy.get('[data-cy=roundTrip]').click({ force: true })
    })
    it("Select From place option", () => {
        cy.get('[data-cy=fromCity]').click()
        cy.get('[placeholder=From]').type(('Hyderabed'))
        cy.contains('Hyderabad, India').click({ force: true })
    })
    it("Select To place option", () => {
        cy.get('#toCity').click({ force: true })
        cy.get('[placeholder=To]').click({ force: true }).type(('chennai'))
        cy.contains('Chennai, India').click({ force: true })
    })
    it("Depature Date", () => {
        cy.get('#departure').click({ force: true })
        cy.get('[aria-label="Tue Sep 21 2021"]').click({force:true})
    })

    it("Depature Date", () => {
        cy.get('#departure').click({ force: true })
        cy.contains('26').first().click({ force: true })
    })

})
