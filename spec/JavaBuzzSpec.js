describe("Javabuzz", function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });


  describe("knows when a number is", function() {

    it("divisible by 3", function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });


  }); // Close describe

  describe('knows when a number is not', function(){

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  }); // Close describe

  describe('when playing the game', function(){

    it('says "Java" if a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('says "Buzz" if a number is divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('says "JavaBuzz" if a number is divisible by both 3 and 5', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

    it('returns the number if not divisible by 3, 5 or 15', function(){
      expect(javabuzz.says(1)).toEqual(1);
    });

  });

}); // Close describe
