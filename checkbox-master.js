export default class CheckboxGroup {
	constructor (selector = '[data-checkbox-group]') {
    const listGroups = document.querySelectorAll(selector)
    if (!listGroups.length) return // Leave silently

    listGroups.forEach(group => { new CheckboxGroupInit(group) })
  }
}

class CheckboxGroupInit {
	constructor (group) {
  	if (!group) throw new Error('Group is undefined')
    this.group = group

  	const master = group.querySelector('[type="checkbox"][data-checkbox-master]')
    if (!master) throw new Error('No master checkbox defined')
    this.master = master
   	this.allOthers = group.querySelectorAll('[type="checkbox"]:not([data-checkbox-master])')

    this.master.addEventListener('click', () => {
      if (this.master.checked) this.uncheckAll()
    })

    this.uncheckMaster ()
  }

  uncheckAll () {
  	this.allOthers.forEach(checkbox => checkbox.checked = false)
  }

  uncheckMaster () {
  	this.allOthers.forEach(checkbox => {
    	checkbox.addEventListener('click', () => {
      	if (this.master.checked) this.master.checked = false
      })
    })
  }
}
