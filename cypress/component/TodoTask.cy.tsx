// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

import TodoTask from '../../src/components/TodoTask'
import { mount } from 'cypress/react'
import React from 'react'

describe('TodoTask.cy.ts', () => {
  it('mounts', () => {
    mount(<TodoTask task='' completeTask={() => true} />)
  })
})
