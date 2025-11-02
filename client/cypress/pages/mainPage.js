class MainPage{
    SelectorsList () {
        const selectors = {
            hireButton: "[data-cy='money']", 
            likeButton:"[data-cy='like']",
            confirmHiringPage: ".modal-container > .open",
            confirmHiringAdmin:".rounded-md",
            confirmHiringButton: ".text-white",
            noButton: ".text-gray-800"// .eq(15)
            
        }

    return selectors 
    }

    hireTheLibrarian() {
        cy.get(this.SelectorsList().hireButton).eq(3).click()
        cy.contains('Hire Hero?')
        cy.get(this.SelectorsList().confirmHiringPage).contains('The Librarian')
        cy.get(this.SelectorsList().confirmHiringButton).click()
    }

    notHireFlyGirl() {
        cy.get(this.SelectorsList().hireButton).eq(6).click()
        cy.contains('Hire Hero?')
        cy.get(this.SelectorsList().confirmHiringPage).contains('Fly Girl')
        cy.get(this.SelectorsList().noButton).eq(15).click()

    }

    hireCyonic() {
        cy.get(this.SelectorsList().hireButton).eq(2).click()
        cy.contains('Hire Hero?')
        cy.get(this.SelectorsList().confirmHiringAdmin).contains('Cyonic')
        cy.get(this.SelectorsList().confirmHiringButton).eq(1).click()
    
    }

    hireWarpSpeedNotLoggedIn() {
        cy.get(this.SelectorsList().hireButton).eq(0).click()
        cy.contains('You must log in to hire this hero.')
        cy.get('.gap-4 > .gap-2 > .undefined').click()
    }
    
    like
}
export default MainPage