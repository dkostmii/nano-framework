import Component from '../../Component.js'
import HelloWorldInner from './HelloWorldInner.js'

class HelloWorld extends Component {
  constructor ({ hello }) {
    super()

    if (typeof hello !== 'string') {
      throw new Error('Expected hello to be string')
    }

    this.hello = hello

    this.deps.inner = new HelloWorldInner({ hello: 'Привіт, Світе!' })

    this.state.counter = 0
  }

  render () {
    const helloWorldContainer = document.createElement('div')

    helloWorldContainer.className = 'hello-world-container card gap-2 p-5 m-3 border border-dark border-opacity-75'
    Object.assign(helloWorldContainer.style, {
      maxWidth: '35%'
    })

    // Component name
    const title = document.createElement('h3')
    title.appendChild(document.createTextNode(this.constructor.name))
    helloWorldContainer.appendChild(title)

    helloWorldContainer.appendChild(document.createTextNode(this.hello))

    // Some state reflecting element

    const counterContainer = document.createElement('div')
    const label = document.createElement('label')
    const counter = document.createElement('span')
    counter.appendChild(document.createTextNode(this.state.counter))
    label.appendChild(document.createTextNode('Counter: '))
    label.appendChild(counter)
    counterContainer.appendChild(label)
    helloWorldContainer.appendChild(counterContainer)

    // Some state changing element

    const button = document.createElement('button')
    button.className = 'btn btn-primary'
    button.addEventListener('click', () => {
      this.setState({ counter: this.state.counter + 1 })
    })
    button.appendChild(document.createTextNode('Click me!'))

    helloWorldContainer.appendChild(button)

    // Inner component definition

    const { inner } = this.baked

    // Warning: uses render() explicitly
    helloWorldContainer.appendChild(inner)

    return helloWorldContainer
  }
}

export default HelloWorld
