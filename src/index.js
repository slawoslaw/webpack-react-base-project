import './main.scss'
import 'whatwg-fetch'

const fetchUrl = 'https://api.github.com/repos/github/fetch'
const body = document.getElementsByTagName('body')[0]
const pre = document.createElement('pre')

body.insertBefore(pre, body.firstChild)

fetch(fetchUrl)
  .then(response => {
    return response.json()
  })
  .then(json => {
    pre.innerText = JSON.stringify(json)
  })
