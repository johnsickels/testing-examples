const faker = require('faker');

var randomEmail = faker.internet.email();
var lorem = faker.lorem.word();

describe('FloRacing Login', function () {
    it('visits the homepage', function () {
        // cy.login('https://api.floracing.com/api/tokens', Cypress.env('email'), Cypress.env('password'))
        cy.visit('/')
    });
    it('visits the login page', function () {
        cy.get('[routerlink="login"]').click()
        cy.url().should('include', 'https://www.floracing.com/login')
    });
    it('requires email address and password', function () {
        cy.get('[formcontrolname="email"]').click()
        cy.get('[formcontrolname="password"]').click()
        cy.contains('Log In').click()
        cy.contains('Email address required').should('exist')
        cy.contains('Password required').should('exist')
    })
    it('requires valid email address format', function () {
        cy.get('[formcontrolname="email"]').type(lorem)
        cy.get('[formcontrolname="password"]').click()
        cy.contains('Invalid email address. Forgot it? Email support@flosports.tv').should('exist')
    })
    it('requires valid email address and password', function () {
        cy.get('[formcontrolname="email"]').clear().type(randomEmail)
        cy.get('[formcontrolname="password"]').type(lorem)
        cy.get('[type="submit"]').click()
        cy.contains('Invalid email/password').should('exist')
    })
    it('logs in', function () {
        cy.get('[formcontrolname="email"]').clear().type(Cypress.env('email'))
        cy.get('[formcontrolname="password"]').clear().type(Cypress.env('password'))
        cy.get('[type="submit"]').click()
        cy.url().should('equal', 'https://www.floracing.com/')
        cy.server().should((server) => {
            expect(server.status).to.eq(200)
        })
    });
});