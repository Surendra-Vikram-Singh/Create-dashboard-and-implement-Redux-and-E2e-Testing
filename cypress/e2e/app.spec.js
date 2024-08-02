describe('App Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should create the app', () => {
      cy.get('app-root').should('exist'); // Ensure the root component exists
    });
  
    it('should render title', () => {
      cy.get('app-header').should('exist'); // Check for header component
      cy.get('h1').should('contain', 'Welcome to the Dashboard!'); // Adjust based on actual title
    });
  });
  