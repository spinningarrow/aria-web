import {render, a, an} from './a.js'
import { getVolume, setVolume } from './api.js'

const output = (text) => a('div', {
  className: 'output',
}, text)

const slider = (initialVolume, handleInput, handleChange) => an('input', {
  defaultValue: initialVolume,
  type: 'range',
  oninput: event => {
    event.target.setAttribute('value', event.target.value)
    handleInput(event.target.value)
  },
  onchange: event => handleChange(event.target.value),
})

const app = (volume) => {
  const updateOutput = (newValue) => document.querySelector('.output').textContent = newValue

  return a('div', { className: 'app' },
    output(`${volume}`),
    a('div', slider(volume, updateOutput, setVolume))
  )
}

getVolume().then(volume => {
  render(app(volume), '#app')
})
