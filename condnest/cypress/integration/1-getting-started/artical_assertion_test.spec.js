/// <reference types="cypress" />


describe('condenast API response testing', () => {

it('Assert the response body with different methods', () => {
  // Response from mock API response
  cy.request('GET', '/?us_site=y&format=json', { fixtures: 'response.json' }).then((res) => {
    //Response form server API response
    //  cy.request('GET','/?us_site=y&format=json').then((res)=>{
    expect(res.status).to.be.equal(200)
    expect(res.body).not.to.be.null
    //description of the story
    //using contains text to assert it 
    cy.fixture('july_month').then((data) => {
      expect(res.body.bundle.containers[0].items[0].dangerousDek).to.be.contains(data.desription)
      //Description Head
      //using equal method to assert it
      expect(res.body.bundle.containers[0].items[0].dangerousHed).to.be.equal(data.heading)
      //Story author
      //using include method to assert it
      expect(res.body.bundle.containers[0].items[0].contributors.author.items[0].name).to.be.include(data.author)
  
  })
})
})
  it('get the all container name', () => {
    cy.request('GET', '/?us_site=y&format=json').then((res) => {

      let len = (res.body.bundle.containers).length
      for (let i = 0; i < len; i++) {

        cy.log(res.body.bundle.containers[i].dangerousHed)
      }
    })
  })
  it('Get the Artical Title, Description and Author of first container', () => {
    cy.request('GET', '/?us_site=y&format=json').then((res) => {

      let len = (res.body.bundle.containers[0].items).length
      cy.log(len)
      for (let i = 0; i < len; i++) {
        cy.log(`Artial Title  = ${res.body.bundle.containers[0].items[i].dangerousHed}`)
        cy.log(`Artical Description  = ${res.body.bundle.containers[0].items[i].dangerousDek}`)
        cy.log(`Artical Author = ${res.body.bundle.containers[0].items[i].contributors.author.items[0].name}`)
      }
    })
  })
})


