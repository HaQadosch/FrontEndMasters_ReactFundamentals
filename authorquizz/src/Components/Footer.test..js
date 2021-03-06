import React from 'react'
import ReactDOM from 'react-dom'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Footer } from './Footer'

/* global it, describe, expect */
enzyme.configure({ adapter: new Adapter() })

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
