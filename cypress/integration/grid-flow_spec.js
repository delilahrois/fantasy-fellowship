describe('User flow basic interactions', () => {

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


  it('should visit the home page', () => {

    cy.url().should('eq', 'http://localhost:3000/')

  })

  it('should render a header title', () => {

    cy.get('h1[class=header-title').contains('Fantasy Fellowship')

  })

  it('should render a link to the users fellowship team', () => {

    cy.get('p[class=header-link]').contains('Your Fellowship')

  })

  it('should show a welcome banner and instructions', () => {

    cy.get('section[class="greeting"]')
    cy.get('h2[class="welcome-header"]').contains('Welcome to Fantasy Fellowship.')
    cy.get('p[class="welcome-p"]').contains('Please select your players.')

  })

  it('should render character cards with their image', () => {

    cy.get('img[class="grid-img"]')

  })

  it('should render buttons to add player to fellowship', () => {

    cy.get('button[class="add-player-btn"]')

  })

  it('should render footer with elf girl', () => {

    cy.get('footer[class="footer"]').contains('Created by Delilah Rose 🧝‍♀️')

  })

})