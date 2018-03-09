import { Component } from "@angular/core";
import template from "./CustomerAddressComponent.html";

var CustomerAddressComponent = Component({
	selector: "shine-address",
	inputs: [
		"address",
		"addressType"
	],
	template: template
}).Class({
	constructor: [
		function() {
			this.address = null;
			this.addressType = null;
		}
	]
});

export { CustomerAddressComponent };
