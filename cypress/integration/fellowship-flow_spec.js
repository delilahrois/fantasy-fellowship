const data = {
  "docs": [
    {
      "birth": "22 September ,TA 2968",
      "death": "Unknown (Last sighting ,September 29 ,3021,) (,SR 1421,)",
      "gender": "Male",
      "hair": "Brown",
      "height": "1.06m (3'6\")",
      "name": "Frodo Baggins",
      "race": "Hobbit",
      "realm": "",
      "spouse": "",
      "wikiUrl": "http://lotr.wikia.com//wiki/Frodo_Baggins",
      "_id": "5cd99d4bde30eff6ebccfc15"
    },
    {
      "birth": "April 6 ,2980",
      "death": "Still alive, after going to the ,Undying Lands, in ,FO 61",
      "gender": "Male",
      "hair": "Blond (movie)",
      "height": "1.22m (4'0\")",
      "name": "Samwise Gamgee",
      "race": "Hobbit",
      "realm": "",
      "spouse": "Rosie Cotton",
      "wikiUrl": "http://lotr.wikia.com//wiki/Samwise_Gamgee",
      "_id": "5cd99d4bde30eff6ebccfd0d"
    }
  ]
}

describe('Fellowship user flow', () => {

  beforeEach(() => {

    // cy.intercept('GET', 'https://the-one-api.dev/v2/character', {fixture: 'data'})
    // cy.wait(1000)
    cy.visit('http://localhost:3000')

    // cy.fixture('./players.json')
    //   .then((characters) => {
    //     cy.intercept('GET', 'https://the-one-api.dev/v2/character', {
    //       statusCode: 200,
    //       body: characters
    //     })
        // cy.visit('http://localhost:3000/')
      // })
  })

  it('should be able to add characters to Fellowship from home screen', () => {

    cy.get('button[class="add-player-btn"]').contains('Frodo').click()
    cy.get('section[class="error-msg"]').contains('You have 8 slots in your Fellowship.')

  })

  it('should be able to visit the Fellowship page and show the correct url', () => {

    cy.get('p[class="header-link"]').click()
    cy.url('http://localhost:3000/fellowship')


  })

  it('should not allow duplicates to be added', () => {

    cy.get('button[class="add-player-btn"]').contains('Frodo').dblclick()
    cy.get('section[class="error-msg"]').contains('Your Fellowship is unable to accept the same player twice! Try another.')
    cy.get('p[class="header-link"]').click()
    cy.get('div[class="team-container"]').should.exist
    cy.get('img[class="grid-img"]').should.exist
    // check that there is not a player that matches on the page.


  })

  it('should let the user remove players from their Fellowship team', () => {

    cy.get('button[class="add-player-btn"]').contains('Frodo').click()
    cy.get('p[class="header-link"]').click()
    cy.get('button[class="remove-btn"]').click()
     // check that there is not a player that matches on the page anymore
    cy.get('p[class="no-team-msg"]').contains(`You haven't added anyone to your Fellowship yet.`)

  })

  it('should allow user to navigate back to the home page', () => {

    cy.get('h1[class="header-title"]').click()


  })

})