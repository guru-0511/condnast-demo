describe("Book  a Ticket", () => {
    before(() => {
        cy.visit("https://www.lufthansa.com/")
    })
    it("verify the page navigate to home page", () => {
        cy.get('#cm-acceptAll').click({ force: true })
        cy.wait(5000)
        cy.contains('Welcome to lufthansa.com').should('be.visible')
        cy.get('button[aria-label="Close"]').last().click({ force: true })

    })
    it("Select From location", () => {
        cy.get('[placeholder="From"]')
            .clear()
            .type('Mumbai')
            .click()

    })
    it("Select To Location", () => {
        cy.get('[placeholder="To"]')
            .click()
            .clear()
            .type('new york')
    })
    it("Select Start date", () => {
        cy.get('[placeholder="Departure date"]').click({force:true})
        cy.get('[aria-label="Choose Friday, 24 September 2021 as your check-in date"]').click({force:true})
    })
    it("Seelct Return Date", () => {
        cy.get('[placeholder="Departure date"]').click({force:true})
        cy.get('[aria-label="Choose Friday, 24 September 2021 as your check-in date"]').click({force:true})
    })
    // it("Add passangers details",()=>{})



})