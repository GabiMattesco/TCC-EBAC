Cypress.Commands.add('token', (usuario, senha) => {
    cy.request({
        method: 'POST',
        url: '/rest-api/docs/coupons',
        body: {
            "user": usuario,
            "password": senha
        }
    }).then((response) => {
        expect(response.status).to.equal(200)
        return response.body.authorization
    })
})

 Cypress.Commands.add('cadastrarCupom' , (token, nome, quantidade, tipo, descricao) =>{
    cy.request({
        method: 'POST', 
        url: 'rest-api/docs/coupons',
        headers: {authorization: token}, 
        body: {
            "code": nome,
            "amount": quantidade,
            "discount_type": tipo,
            "description": descricao
          }, 
          failOnStatusCode: false
    })
 })

 