/**
 * - Login spec
 *   - should display login page correctly
 */
describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });
});