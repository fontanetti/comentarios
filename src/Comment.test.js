import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comment from './Comment'

describe('<Comment /', () => {
  it('renders without crashing', () => {
      const comment = {
          comment: 'test',
          user: {uid: '1', name: 'john'}
      }
      const key = 1
    const wrapper = shallow(<Comment key={key} comment={comment} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.is('.well')).toBe(true)
    expect(wrapper.text()).toBe('john escreveu:test')
  })
})
