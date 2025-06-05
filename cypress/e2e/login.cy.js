/**
 * - Login spec
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display homepage when username and password are correct', { defaultCommandTimeout: 60000 }, () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('namesix@mail.com');

    // mengisi password
    cy.get('input[placeholder="Password"]').type('namesix');

    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    cy.get('nav',).contains(/^Home$/).should('be.visible');
    cy.get('button').contains('Sign out').should('be.visible');
  });
});