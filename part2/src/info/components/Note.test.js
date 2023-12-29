/* eslint-disable testing-library/no-dom-import */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Note from './Note'


test('renders content', () => {
    const note = {
        content: 'Component testing is done with react-testing-library',
        important: true
    }

    const component = render(
        <Note note={note} />
    )

    // eslint-disable-next-line testing-library/no-debugging-utils
    component.debug()

    const li = component.container.querySelector('li')
  
    console.log(prettyDOM(li))

    // method 1
    expect(component.container).toHaveTextContent(
        'Component testing is done with react-testing-library'
    )

    // method 2
    const element = component.getByText(
        'Component testing is done with react-testing-library'
    )
    expect(element).toBeDefined()

    // method 3
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const div = component.container.querySelector('.note')
    expect(div).toHaveTextContent(
        'Component testing is done with react-testing-library'
    )
})

test('clicking the button calls event handler once', () => {
    const note = {
      content: 'Component testing is done with react-testing-library',
      important: true
    }
  
    const mockHandler = jest.fn()
  
    const component = render(
      <Note note={note} toggleImportance={mockHandler} />
    )
        
    const button = component.getByText('make not important')
    fireEvent.click(button)
  
    expect(mockHandler.mock.calls).toHaveLength(1)
  })