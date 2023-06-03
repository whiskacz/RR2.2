import { data } from './data.js'
import {combineAge, renderAge} from './helpers.js'


const tekst = document.querySelector('h1')
console.log(combineAge(data))

renderAge(tekst, data)
