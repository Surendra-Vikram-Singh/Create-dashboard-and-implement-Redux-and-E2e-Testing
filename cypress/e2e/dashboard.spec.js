describe('Dashboard Component', () => {
    beforeEach(() => {
      // Visit the base URL
      cy.visit('/');
    });
  
    it('should display posts', () => {
      cy.contains('Dashboard').click(); // Adjust based on actual navigation
      cy.url().should('include', '/dashboard');
      cy.get('p').should('have.length.greaterThan', 0); // Adjust based on actual posts length
      cy.get('p').first().should('contain', 'Post'); // Adjust based on actual content
    });
  });
  