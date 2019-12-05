/// <reference types="Cypress" />

describe('Smoke test', function () {
    it('Logs in and visits the homepage', function () {
        cy.login('https://staging-api.flosports.tv/api/tokens', Cypress.env('email'), Cypress.env('password'))
        cy.visit('/sports')
        cy.server().should((server) => {
            expect(server.status).to.eq(200)
        })
        cy.url().should('include', 'sports')
    });
});