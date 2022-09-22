import Component from '../../Component.js'
import Cat from './Cat.js'

class HelloWorldInner extends Component {
  constructor ({ hello }) {
    super()

    if (typeof hello !== 'string') {
      throw new Error('Expected hello to be a string')
    }

    this.hello = hello

    this.deps.cat = new Cat()
  }

  render () {
    const helloWorldInnerContainer = document.createElement('div')
    helloWorldInnerContainer.className = 'hello-world-inner-container card p-3 border border-dark border-opacity-75'

    // Component name
    const title = document.createElement('h3')
    title.appendChild(document.createTextNode(this.constructor.name))
    helloWorldInnerContainer.appendChild(title)

    helloWorldInnerContainer.appendChild(document.createTextNode(this.hello))

    const { cat } = this.baked

    helloWorldInnerContainer.appendChild(cat)

    return helloWorldInnerContainer
  }
}

export default HelloWorldInner
