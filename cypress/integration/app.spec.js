describe('Application components interaction', () => {
  
    it('click om movie component', () => {
        cy.visit('http://localhost:8080/');
        cy.get('.movie-founded').should('not.be.visible');
        cy.get('.header-line .button_reverse').should('not.be.visible');
        cy.get('.movie:first-child').click();
        cy.get('.movie-founded').should('be.visible');
        cy.get('.header-line .button_reverse').click();
        cy.get('.movie-founded').should('not.be.visible');
    })

  })
  