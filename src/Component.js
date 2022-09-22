class Component {
  // dependencies
  deps = { }

  // baked chunks (from deps)
  baked = { }

  // Component's information
  // See setState(state, prevState) to manage it
  state = { }

  // Component's DOM tree
  tree = document.createElement('div')

  render () {
    const componentContainer = document.createElement('div')

    componentContainer.className = 'component-container'

    componentContainer.appendChild(document.createTextNode('Component'))

    return componentContainer
  }

  // See Renderer.renderComponent(component) definition
  setState (state, prevState) {
    throw new Error('Not implemented')
  }
}

export default Component
