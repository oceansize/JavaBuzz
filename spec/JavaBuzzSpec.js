describe("Javabuzz", function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });


  describe("knows when a number is", function() {

    it("divisible by 3", function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  }); // Close describe

}); // Close describe
