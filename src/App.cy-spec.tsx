// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />
import React from 'react'
import App from './App'
import { mount } from 'cypress/react'

it('renders learn react link', () => {
  mount(<App />)
  cy.contains(/learn react/i)
})
