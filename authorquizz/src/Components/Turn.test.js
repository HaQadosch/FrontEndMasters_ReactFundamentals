import React from 'react'
import ReactDOM from 'react-dom'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Turn } from './Turn'

/* global it, describe, expect */
enzyme.configure({ adapter: new Adapter() })

describe('Turn Component', () => {
  const author = { imageURL: '' }
  const books = []

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Turn author={author} books={books} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
