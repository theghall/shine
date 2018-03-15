import { Component, EventEmitter } from "@angular/core";
import template from "./template.html";

var TextFieldComponent = Component({
	selector: "shine-text-field",
	template: template,
	inputs: [
		"object",
		"field_name",
		"compact",
		"pattern",
		"label",
		"addon"
	],
	outputs: [
		"valueChanged"
	]
}).Class({
	constructor: [
		function() {
			this.object = null;
			this.field_name = null;
			this.compact = false;
			this.pattern = null;
			this.label = null;
			this.addon = null;
			this.valueChanged = new EventEmitter();
		}
	],
	ngOnInit: function() {
		if (this.object && this.field_name) {
			this.originalValue = this.object[this.field_name];
		}
		else {
			this.originalValue = null;
		}
	},
	blur: function(model) {
		if (this.modelValid(model)) {
			if (this.originalValue != model.value) {
				this.valueChanged.emit({
					field_name: this.field_name,
					value: model.value
				});
				this.originalValue = model.value;
			}
		}
	},
	modelValid: function(model) {
		return !(model.invalid && model.dirty);
	},
	validationPattern: function() {
		if (this.pattern) {
			return this.pattern;
		}
		else {
			return "^.*$";
		}
	}
});

export { TextFieldComponent };
