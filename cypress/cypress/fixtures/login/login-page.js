

const LOGIN_URL = 'https://www.lrb.co.uk/login'

export class LoginPage {

    goToLoginPage(){
        cy.visit(LOGIN_URL)
    }

    enterUsername(username){
        cy.get('#username').type(username)
    }

    enterPassword(password){
        cy.get('#password').type(password)
    }

    submitLogin(){
        cy.get('[class=login-submit-killthisclass] > button').click()
    }

    checkLoginPanelError(){
            cy.get('#form-error-notification').should('be.visible', 'Incorrect email address or password')
    }

    acceptBanner(){
        cy.get('#onetrust-accept-btn-handler').click()
    }
}

export const loginPage = new LoginPage()

