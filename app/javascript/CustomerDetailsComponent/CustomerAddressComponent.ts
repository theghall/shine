import { EventEmitter, Component } from "@angular/core";
import template from "./CustomerAddressComponent.html";

var CustomerAddressComponent = Component({
	selector: "shine-address",
	inputs: [
		"address",
		"addressType"
	],
	outputs: [
		"addressChanged"
	],
	template: template
}).Class({
	constructor: [
		function() {
			this.address = null;
			this.addressType = null;
			this.addressChanged = new EventEmitter();
		}
	],
	save: function(update) {
		this.addressChanged.emit(update);
	}
});

export { CustomerAddressComponent };
