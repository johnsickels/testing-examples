/// <reference types="Cypress" />

const faker = require('faker');
const marquee = faker.lorem.word();
const name = faker.name.firstName();
const abbv = faker.hacker.abbreviation();
const number = faker.random.number();
const name2 = faker.name.firstName();
const abbv2 = faker.hacker.abbreviation();
const number2 = faker.random.number()


describe('FloBikes', function () {

    before(function () {
        cy.login('https://staging-api.flosports.tv/api/tokens', Cypress.env('email'), Cypress.env('password'));
        cy.visit('/sports');
    })

    it('Selects the sport', function () {
        cy.contains('FloBikes').click();
    });

    it('Selects the event', function () {
        cy.contains('AUTOMATION-BIKES-TEST').click();
    });

    it('Selects the stream', function () {
        cy.get('a:contains("AUTOMATION-BIKES-TEST")').click();
    });

    it('Fills out the setup screen', function () {
        cy.get('#scoreboard-style').select('flat');
        cy.get('#marquee').type(marquee);
        cy.get('#clock-seconds-display').select('10ths');
        cy.get('#gender').select('Mixed');
        cy.get('#type').select('Cyclocross');
        cy.get('#level').select('Master');
        cy.get('#team1').type(name);
        cy.get('#team1-abbv').type(abbv);
        cy.get('#rank1').type(number);
        cy.get('#team1-color').find('select').select('Gold');
        cy.fixture('flo_icon.png').then(fileContent => {
            cy.get('flosco-logo-upload[name=team1Logo]').within(() => {
                cy.get('input[type=file]').upload(
                    { fileContent, fileName: 'flo_icon.png', mimeType: 'image/png' },
                    { subjectType: 'input', force: true },
                );
            });
        });
        cy.get('#team2').type(name2);
        cy.get('#team2-abbv').type(abbv2);
        cy.get('#rank2').type(number2);
        cy.get('#team2-color').find('select').select('Green');
        cy.fixture('bike_icon.png').then(fileContent => {
            cy.get('flosco-logo-upload[name=team2Logo]').within(() => {
                cy.get('input[type=file]').upload(
                    { fileContent, fileName: 'bike_icon.png', mimeType: 'image/png' },
                    { subjectType: 'input', force: true },
                );
            });
        });
    });

    it('Starts the game', function() {
        cy.contains('Start Game').click()
    })
    // .next('Click Start Game', async (context: AssertionContext) => {
    //     const submitButton = await context.waitForExists(testConstants.buttonPrimary);
    //     await submitButton.click();
    //     return context.waitForNavigation();
    // })
    // .next('Click all possession buttons', async (context: AssertionContext) => {
    //     await context.pause(2000);
    //     const allPossesionButtons = await context.findAll('button.possession');
    //     for (let i = 0; i < allPossesionButtons.length; i++) {
    //         let button = allPossesionButtons[i];
    //         await button.click();
    //     }
    // })
    // .next('Click all bonus buttons', async (context: AssertionContext) => {
    //     const allBonusButtons = await context.findAll('button.bonus');
    //     for (let i = 0; i < allBonusButtons.length; i++) {
    //         let button = allBonusButtons[i];
    //         await button.click();
    //     }
    // })
    // .next('Click all points buttons', async (context: AssertionContext) => {
    //     const allPointsButtons = await context.findAll('button.btn-outline-secondary.font-weight-bold');
    //     for (let i = 0; i < allPointsButtons.length; i++) {
    //         let button = allPointsButtons[i];
    //         await button.click();
    //     }
    // })
    // .next('Timeout for Team One', async (context: AssertionContext) => {
    //     await context.pause(2000);
    //     const timeoutButton: DOMElement = await context.findHavingText(testConstants.buttonSecondary, /Timeout/g);
    //     context.assert('Timeout Button exists', timeoutButton).exists();
    //     await timeoutButton.click();
    //     await context.pause(2000);
    //     const teamOneButton: DOMElement = await context.findHavingText(testConstants.buttonSecondary, /Team One/g);
    //     context.assert('Team One Button exists', teamOneButton).exists();
    //     await teamOneButton.click();
    //     const confirmButton: DOMElement = await context.findHavingText(testConstants.buttonPrimary, 'Confirm');
    //     context.assert('Confirm Button exists', confirmButton).exists();
    //     await confirmButton.click();
    //     await context.pause(2000);
    //     const resumeGameButton: DOMElement = await context.findHavingText(testConstants.buttonPrimary, /Resume Game/g);
    //     context.assert('Resume Game Button exists', resumeGameButton).exists();
    //     await resumeGameButton.click();
    // })
    // .next('End Game', async (context: AssertionContext) => {
    //     const submitButton = await context.find(testConstants.buttonPrimary);
    //     await submitButton.click();
    //     await context.pause(2000);
    //     const finalScoreButton: DOMElement = await context.findHavingText(testConstants.buttonSecondary, /Final Score/g);
    //     await finalScoreButton.click();
    //     await context.pause(2000);
    //     const confirmButton: DOMElement = await context.findHavingText(testConstants.buttonPrimary, /Confirm/g);
    //     await confirmButton.click();
    //     await context.pause(2000);
    //     const endGameButton: DOMElement = await context.findHavingText(testConstants.buttonPrimary, /End Game/g);
    //     await endGameButton.click();
    //     await context.waitForNavigation();
    // });

});