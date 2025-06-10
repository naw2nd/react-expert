/**
 * - Login spec
 *   - should display login page correctly
 *   - should display homepage when email and password are correct
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


  // it('should display homepage when email and password are correct', () => {
  //   // mengisi email
  //   cy.get('input[placeholder="Email"]').type('namesix@mail.com');

  //   // mengisi password
  //   cy.get('input[placeholder="Password"]').type('namesix');

  //   // menekan tombol Login
  //   cy.get('button').contains(/^Login$/).click();

  //   // memverifikasi bahwa elemen yang berada di homepage ditampilkan
  //   cy.get('nav').contains(/^Home$/).should('be.visible');
  //   cy.get('button').contains('Sign out').should('be.visible');
  // });
});