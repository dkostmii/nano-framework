import Component from '../../Component.js'

class Cat extends Component {
  constructor () {
    super()

    this.state = {
      edit: false,
      text: 'MEOOOWW!!! OwU'
    }
  }

  render () {
    const catContainer = document.createElement('div')

    catContainer.className = 'cat-container card d-flex gap-3 p-3 border border-dark border-opacity-75'

    // Component name
    const title = document.createElement('h3')
    title.appendChild(document.createTextNode(this.constructor.name))
    catContainer.appendChild(title)

    // Conditional rendering
    if (this.state.edit) {
      const input = document.createElement('input')
      input.type = 'text'
      input.value = this.state.text
      input.className = 'form-control'

      const cancelButton = document.createElement('button')
      cancelButton.className = 'btn btn-secondary'

      cancelButton.appendChild(document.createTextNode('Cancel'))
      cancelButton.addEventListener('click', () => {
        this.setState({ edit: false }, this.state)
      })

      const saveButton = document.createElement('button')
      saveButton.className = 'btn btn-primary'

      saveButton.appendChild(document.createTextNode('Save'))
      saveButton.addEventListener('click', () => {
        this.setState({ edit: false, text: input.value })
      })

      const btns = document.createElement('div')
      btns.className = 'd-flex flex-row justify-content-between'

      btns.append(saveButton, cancelButton)

      catContainer.append(input, btns)
    } else {
      catContainer.appendChild(document.createTextNode(this.state.text))
      const editButton = document.createElement('button')
      editButton.className = 'btn btn-primary'
      editButton.appendChild(document.createTextNode('Edit'))

      editButton.addEventListener('click', () => this.setState({ edit: true }, this.state))

      catContainer.appendChild(editButton)
    }

    return catContainer
  }
}

export default Cat
