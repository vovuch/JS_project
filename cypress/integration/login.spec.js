import login from '../selectors/login.sel'

describe('Testing Login page', () => {
    //Test_001: Verify that user can be logged
    before ('Open login page and accept all cookies',() =>{
        cy.visit('/login')
        cy.get(login.acceptCookies).click()
    })

    it ('Enter user credentials', function(){
        const email = Cypress.env('email')
        const password = Cypress.env('password')
        cy.get(login.emailField).type(email, {timeout: 10000, force: true})
        cy.get(login.passwordField).click().type(password)
        cy.get(login.loginButton).click()
    })
    it ('Virify that user is logged', () =>{
        cy.contains('Calculate your metal parts')
        cy.url().should('include', '/product')
    })
})