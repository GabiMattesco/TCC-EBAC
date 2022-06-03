/// <reference types="cypress" />
import commands from "../support/page_objects.js/commands_api"

describe('Api de cupons', () => {
    let token
    before(() => {
        cy.token('admin_ebac','@admin!&b@c!2022').then(tkn => { token = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'})
    });

    it.only('Cadastrar Cupom', () => {
        let cupom = `Cupom EBAC ${Math.floor(Math.random() * 100000000)}`
        cy.request({
            method: 'POST',
            url: 'rest-api/docs/coupons/',
            body: {
                "code": cupom,
                "amount": 5,
                "discount_type": "fixed_product",
                "description": "Cupom de desconto primeira compra"
            },
            headers: {authorization: token}
       
        }).then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal()
        })

    });

    // it('Deve listar todos os cupons cadastrados', () => {
    //     cy.request({
    //         method: 'GET',
    //         url: 'http://lojaebac.ebaconline.art.br/rest-api/docs/coupons',
           
                 
    //         headers:{authorization: token}
    // });



})

