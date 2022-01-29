describe('Fellowship user flow', () => {

  beforeEach(() => {

    cy.intercept('GET', 'https://the-one-api.dev/v2/character', {fixture: '../fixtures/players.json' })
    cy.visit('http://localhost:3000')

  })

  it('should be able to add characters to Fellowship from home screen', () => {

    cy.get('button[class="add-player-btn"]').contains('Frodo').click()
    // cy.get('section[class="error-msg"]').contains('You have 8 slots in your Fellowship.')

  })

  it('should be able to visit the Fellowship page and show the correct url', () => {

    cy.get('p[class="header-link"]').click()
    cy.url('http://localhost:3000/fellowship')

  })

  it('should not allow duplicates to be added', () => {

    cy.get('button[class="add-player-btn"]').contains('Frodo').dblclick()
    // cy.get('section[class="error-msg"]').contains('Your Fellowship is unable to accept the same player twice! Try another.')
    cy.get('p[class="header-link"]').click()
    cy.get('div[class="team-container"]').should.exist
    // cy.get('img[class="grid-img"][id="5cd99d4bde30eff6ebccfc15"]').should('length', 1)

  })

  it('should let the user remove players from their Fellowship team', () => {

    cy.get('button[class="add-player-btn"]').contains('Frodo').click()
    cy.get('p[class="header-link"]').click()
    cy.get('button[class="remove-btn"]').click()
    cy.get('img[class="grid-img"][id="5cd99d4bde30eff6ebccfc15"]').should('length', 0)
    cy.get('p[class="no-team-msg"]').contains(`You haven't added anyone to your Fellowship yet.`)

  })

  it('should allow user to navigate back to the home page from Fellowship', () => {

    cy.get('p[class="header-link"]').click()
    cy.get('h1[class="header-title"]').click()

  })

})