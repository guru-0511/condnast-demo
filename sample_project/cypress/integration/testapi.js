describe ("verify api",()=>{

    it("chcek the status",()=>{
        cy.request('https://reqres.in/api/users?page=2').then((res)=>{
       expect( res.status).to.be.equal(200)
       expect(res.id).to.be.equal(8)
       

        })

    })
    it("chcek the status",()=>{
        cy.request('https://reqres.in/api/users?page=2')
        .its("status")
        .should('eq',200)
        
    
    })
})