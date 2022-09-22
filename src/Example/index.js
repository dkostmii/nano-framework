import Renderer from '../Renderer.js'
import HelloWorld from './Components/HelloWorld.js'

const root = document.getElementById('root')

const helloWorld = new HelloWorld({ hello: 'Hello, World!' })

Renderer.renderTree(helloWorld, root)
