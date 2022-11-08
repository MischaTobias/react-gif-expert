describe('GifExpertApp test', () => {
  it('Gets SAO Gifs', () => {
    cy.visit('http://localhost:5173/');

    // cy.contains('type').click();

    // // Should be on a new URL which
    // // includes '/commands/actions'
    // cy.url().should('include', '/commands/actions');

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.gifInput').type('SAO').should('have.value', 'SAO');

    cy.get('.gifInput').type('{enter}');

    cy.get('.card-grid').children();
  });
});
