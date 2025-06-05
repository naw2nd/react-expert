/**
 * - Login spec
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display homepage when username and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('namesix@mail.com');

    // mengisi password
    cy.get('input[placeholder="Password"]').type('namesix');

    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    // cy.get('nav', { timeout: 10000 }).contains(/^Home$/).should('be.visible');
    cy.get('body').then(($body) => {
      cy.log($body.html()); // akan muncul di log GitHub Actions
    });
    cy.get('button', { timeout: 10000 }).contains('Sign out').should('be.visible');
  });
});