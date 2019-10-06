class ActionNetworkForm {
  constructor(actionId) {
    this.actionId = actionId
  }

  loadScript() {
    const scripts = document.querySelectorAll(`#actionNetwork-${this.actionId}`)
    scripts.forEach(script => script.parentNode.removeChild(script))

    const script = document.createElement('script')
    script.src = `https://actionnetwork.org/widgets/v3/petition/${this.actionId}?format=js&source=widget`
    script.id = `actionNetwork-${this.actionId}`

    document.body.appendChild(script)

    return script.id
  }

  removeScript() {
    const scripts = document.querySelectorAll(`#actionNetwork-${this.actionId}`)

    scripts.forEach(script => script.parentNode.removeChild(script))
  }
}

export default ActionNetworkForm
