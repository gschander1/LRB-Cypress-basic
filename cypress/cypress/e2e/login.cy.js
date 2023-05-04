import {loginPage} from "../fixtures/login/login-page.js"

describe("login user", function() {
    it("login with incorrect user", function() {
        loginPage.goToLoginPage()
        cy.wait(2000)
        loginPage.acceptBanner()
        loginPage.enterUsername("gg@gg.com")
        loginPage.enterPassword("password")
        loginPage.submitLogin()
        loginPage.checkLoginPanelError()
    })

})
