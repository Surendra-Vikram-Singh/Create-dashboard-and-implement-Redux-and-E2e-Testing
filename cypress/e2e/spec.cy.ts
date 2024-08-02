
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running', { timeout: 10000 }); // 10 seconds

    // cy.contains('app is running')
  })
})
