export default class CheckboxGroup {
	/**
	 * Creates an instance of CheckboxGroup.
	 * @param {string} selector - The selector for the checkbox group
	 */
	constructor(selector = '[data-checkbox-group]') {
		const listGroups = document.querySelectorAll(selector)
		if (!listGroups.length) return

		listGroups.forEach(group => { new CheckboxGroupInit(group) })
	}
}

class CheckboxGroupInit {
	/**
	 * Creates an instance of CheckboxGroupInit.
	 * @param {HTMLElement} group - The checkbox group element
	 */
	constructor(group) {
		if (!group) throw new Error('Group is undefined')
		this.group = group

		this.master = group.querySelector('[type="checkbox"][data-checkbox-group-master]')
		if (!this.master) throw new Error('No master checkbox defined')

		this.allOthers = group.querySelectorAll('[type="checkbox"]:not([data-checkbox-group-master])')

		this.master.addEventListener('click', () => { this.handleAllOthers() })
		this.handleMaster()
	}

	/**
	 * Toggles the checked state of all other checkboxes based on the master checkbox
	 */
	handleAllOthers () {
		this.allOthers.forEach(checkbox => checkbox.checked = this.master.checked)
	}

	/**
	 * Sets up event listeners for the other checkboxes to update the master checkbox state.
	 */
	handleMaster () {
		this.allOthers.forEach(checkbox => {
			checkbox.addEventListener('click', () => {
				this.master.checked = [...this.allOthers].every(cb => cb.checked)
			})
		})
	}
}
