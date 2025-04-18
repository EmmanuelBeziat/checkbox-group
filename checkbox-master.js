class CheckboxGroup {
	constructor(selector = '[data-checkbox-group]') {
		const listGroups = document.querySelectorAll(selector)
		if (!listGroups.length) return

		listGroups.forEach(group => { new CheckboxGroupInit(group) })
	}
}

class CheckboxGroupInit {
	constructor(group) {
		if (!group) throw new Error('Group is undefined')
		this.group = group

		const master = group.querySelector('[type="checkbox"][data-checkbox-group-master]')
		if (!master) throw new Error('No master checkbox defined')
		this.master = master
		this.allOthers = group.querySelectorAll('[type="checkbox"]:not([data-checkbox-group-master])')

		this.master.addEventListener('click', () => {
			this.handleAllOthers()
		})

		this.handleMaster()
	}

	handleAllOthers () {
		this.allOthers.forEach(checkbox => checkbox.checked = this.master.checked)
	}

	handleMaster () {
		this.allOthers.forEach(checkbox => {
			checkbox.addEventListener('click', () => {
				const allOthersChecked = [...this.allOthers].every(cb => cb.checked)
				this.master.checked = allOthersChecked
			})
		})
	}
}
