// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  const terminalLog = (violations) => {
    cy.task(
      'log',
      `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
        violations.length === 1 ? 'was' : 'were'
      } detected`,
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }))

    cy.task('table', violationData)
  }

  // This is a more complex way of running the audit test but allows clearer displaying of violations in the terminal
  it('Logs violations to the terminal', () => {
    cy.checkA11y(null, null, terminalLog)
  })

  // This is the basic test to just run the a11y audit
  //   it.only('Has no detectable a11y violations on load (custom configuration)', () => {
  //     cy.checkA11y()
  //   })

  //   it('displays two todo items by default', () => {
  //     // cy.get('.todo-list li').should('have.length', 2)

  //     // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
  //     // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')

  //     cy.get('.task').should('have.length', 1)
  //   })
})
