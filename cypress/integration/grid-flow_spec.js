describe('User flow basic interactions', () => {

  beforeEach(() => {

    cy.intercept('https://the-one-api.dev/v2/character', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sNVXztaU5nXNFJjGiLRW'
      }
    }, {fixture: 'players'}
    )
    cy.visit('http://localhost:3000/')

  })


  it('should visit the home page', () => {

    cy.url().should('eq', 'http://localhost:3000/')

  })

  // it()

})