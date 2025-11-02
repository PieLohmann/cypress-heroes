import userData from "../fixtures/userData"
import loginPage from "../pages/loginPage"
import mainPage from "../pages/mainPage"

const LoginPage = new loginPage
const MainPage = new mainPage

describe('Hire Heroes',() =>{
    it('Should hire a hero as User', () => {
        LoginPage.accessLoginPage()
        LoginPage.loginAsUser(userData.userAccess,userData.password)
        MainPage.hireTheLibrarian()
    })

    it('Not hire a hero', () => {
        LoginPage.accessLoginPage()
        LoginPage.loginAsUser(userData.userAccess,userData.password)
        MainPage.notHireFlyGirl()
    })

    it('Hire a hero as Admin', () => {
        LoginPage.accessLoginPage()
        LoginPage.loginAsAdmin(userData.adminAccess,userData.password)
        MainPage.hireCyonic()
    })

    it('Try hire a hero without Logging in - Should return error message', () => {
        cy.visit('http://localhost:3000/heroes')
        MainPage.hireWarpSpeedNotLoggedIn()
    })
         
        
})
