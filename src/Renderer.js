import Component from './Component.js'

class Renderer {
  // replace old component's DOM tree with new one
  // (which includes projected info from state)
  static rerenderComponent (component) {
    if (!(component instanceof Component)) {
      throw new Error('Expected component to be instance of Component')
    }

    const { tree } = component

    const newTree = Renderer.renderComponent(component)

    tree.parentElement.insertBefore(newTree, tree)

    tree.parentElement.removeChild(tree)

    if (component.tree !== newTree) {
      throw new Error('Expected component.tree to be equal to newTree')
    }

    return component.tree
  }

  // Bake component
  // Baked deps are placed in component.baked
  // Bakes only once
  static bakeComponent (component) {
    if (!(component instanceof Component)) {
      throw new Error('Expected component to be instance of Component')
    }

    // Do not bake if this done already
    if (Object.keys(component.baked).length > 0) return

    Object.keys(component.deps).forEach(key => {
      const c = component.deps[key]

      component.baked[key] = Renderer.renderComponent(c)
    })
  }

  // Render component and return its DOM tree
  static renderComponent (component) {
    if (!(component instanceof Component)) {
      throw new Error('Expected component to be instance of Component')
    }

    Renderer.bakeComponent(component)

    // prevState is merged with state
    // if former is provided
    component.setState = (state, prevState) => {
      if (prevState) {
        component.state = { ...prevState, ...state }
      } else {
        component.state = state
      }
      Renderer.rerenderComponent(component)
    }

    component.tree = component.render()

    return component.tree
  }

  // Render rootComponent into rootDiv
  static renderTree (rootComponent, rootDiv) {
    if (!(rootDiv instanceof HTMLDivElement)) {
      throw new Error('Expected rootDiv to be instance of HTMLDivElement')
    }

    const tree = Renderer.renderComponent(rootComponent)

    rootDiv.appendChild(tree)
  }
}

export default Renderer
