import td from "testdouble/dist/testdouble";

describe("Javascript testing", function() {
	it("should work", function() {
		var mockFunction = td.function();

		td.when(mockFunction(42)).thenReturn("Function Called!");

		expect(mockFunction(42)).toBe("Function Called!");
	});
});
