import userData from "../fixtures/userData"
import loginPage from "../pages/loginPage"

const LoginPage = new loginPage

describe('Success Login', () => {
    it('Should Login whith admin access', () => {
        LoginPage.accessLoginPage()
        LoginPage.loginAsAdmin(userData.adminAccess,userData.password)
    })

    it('Should Login whith user access', () => {
        LoginPage.accessLoginPage()
        LoginPage.loginAsUser(userData.userAccess,userData.password)
    })
})

describe('Login Fail - Should return an error message', () => {
    it('Wrong Email ', () =>{
        LoginPage.accessLoginPage()
        LoginPage.loginWrongEmail(userData.wrongAccess,userData.password)
    })

    it('Wrong Password ', () =>{
        LoginPage.accessLoginPage()
        LoginPage.loginWrongPassword(userData.userAccess,userData.wrongPassword)
    })

describe('Logout',() => {
    it('Should log out successfully', () => {
        LoginPage.accessLoginPage()
        LoginPage.loginAsUser(userData.userAccess,userData.password)
        LoginPage.logout()
    })
})

})