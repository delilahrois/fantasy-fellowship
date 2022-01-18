describe('Character page user interactions', () => {


  beforeEach(() => {

    cy.intercept('GET', 'https://the-one-api.dev/v2/character', {fixture: '../fixtures/players.json' })
    cy.visit('http://localhost:3000')

  })

  it(`should be able to visit a character's page with unique ID`, () => {



  })

  it('should show character info on their page', () => {


  })

  it('should allow the user to add the player to their team from the page', () => {


  })

  it('should allow user to access the Fellowship page and return to home', () => {

    
  })
})