describe('Fellowship user flow', () => {

  beforeEach(() => {

    // cy.fixture('./players.json')
    //   .then((characters) => {
    //     cy.intercept('GET', 'https://the-one-api.dev/v2/character', {
    //       statusCode: 200,
    //       body: characters
    //     })
        cy.visit('http://localhost:3000/')
      // })
  })

  it('should be able to add characters to Fellowship from home screen', () => {

    cy.get('button[class="add-player-btn"]').contains('Frodo').click()
    cy.get('section[class="error-msg"]').contains('You have 8 slots in your Fellowship.')

  })

  it('should not allow duplicates to be added', () => {

    cy.get('button[class="add-player-btn"]').contains('Frodo').click()
    cy.get('section[class="error-msg"]').contains('Your Fellowship is unable to accept the same player twice! Try another.')
    cy.get('')
    // get link to Your Fellowship and click.
    // check that there is not a player that matches on the page.


  })

  it('should let the user remove players from their Fellowship team', () => {

    cy.get('')
// get link to Your Fellowship and click.
    cy.get('button[class="remove-btn"]').click()
    // check that there is not a player that matches on the page anymore

  })

})