class LoginPage {

    SelectorsList () {
        const selectors = {
            loginButton: 'li > .undefined',
            emailField: "[data-cy='email']",
            passwordField: "[data-cy='password']",
            signInButton: ".text-white",
            logoutButton: ".undefined" // .eq(0)
        }   

    return selectors
    }

    accessLoginPage() {
         cy.visit('http://localhost:3000/heroes')
         cy.get(this.SelectorsList().loginButton).click()
         cy.contains('Login')
         }

    loginAsAdmin(email,password) {
        cy.get(this.SelectorsList().emailField).type(email)
        cy.get(this.SelectorsList().passwordField).type(password)
        cy.get(this.SelectorsList().signInButton).click()
        cy.get('[data-cy=pencil]').should('exist')
    }

    loginAsUser(email,password) {
        cy.get(this.SelectorsList().emailField).type(email)
        cy.get(this.SelectorsList().passwordField).type(password)
        cy.get(this.SelectorsList().signInButton).click()
        cy.get('[data-cy=pencil]').should('not.exist')
    }

    loginWrongEmail(email,password) {
        cy.get(this.SelectorsList().emailField).type(email)
        cy.get(this.SelectorsList().passwordField).type(password)
        cy.get(this.SelectorsList().signInButton).click()
        cy.contains('Invalid email or password')
    }

    loginWrongPassword(email,password) {
        cy.get(this.SelectorsList().emailField).type(email)
        cy.get(this.SelectorsList().passwordField).type(password)
        cy.get(this.SelectorsList().signInButton).click()
        cy.contains('Invalid email or password')
    }
    logout() {
        cy.get(this.SelectorsList().logoutButton).eq(0).click()
        cy.contains('Login')
    }

    }


export default LoginPage