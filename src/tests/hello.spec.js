/**
 * name: hello.spec.js
 * desc: This file contains test cases to test hello.js function
 * author: Anuj Gupta
 */

describe('Check required fields', function () {
  var data = { name: 'jasmine', version: 3.1 }

  it('Should contains name', function () {
    expect(hasRequiredField(data, 'name')).toBe(true)
  })

  it('Should contains version', function () {
    expect(hasRequiredField(data, 'version')).toBe(true)
  })

  it('Should not contains author', function () {
    expect(hasRequiredField(data, 'author')).toBeFalsy()
  })
})

describe('File name', function () {
  it('should contain filename', function () {
    expect(getFileName()).toEqual('hello.js')
  })
})

//Matchers example
describe('Equality check example', function () {
  it('The Example of toEqual() method', function () {
    //This will check whether the value of the function add() is equal to 8.
    expect(add(3, 5)).toEqual(8)
  })

  it('The Example of not toEqual() method', function () {
    //This will check whether the value of the function add() is not equal to 7.
    expect(add(3, 5)).not.toEqual(7)
  })

  it('The Example of toBe() method', function () {
    //This will check whether they're the same object. 
    expect(testValue.name.key).toBe(testValue.name1.key); //pass: Same object type string
    // expect(testValue.name).toBe(testValue.name1); //fail: Both are different object
    expect(testValue.name).not.toBe(testValue.name1); //pass
  })

  it('Difference btw toEqual() and toBe() method', function () {
    // expect(testValue.name).toBe(testValue.name1); //fail
    expect(testValue.name).toEqual(testValue.name1);
  })
})

describe('Different Methods of Boolean check', function () {
  it('The Example of toBeTruthy() method', function () {
    expect(exampleOfBoolean('jasmine')).toBeTruthy();
  });

  it('The Example of toBeFalsy() method', function () {
    expect(exampleOfBoolean('karma')).toBeFalsy();
  });
});

describe('Different Methods of sequential check', function () {

  it('The Example of toContain() method', function () {
    expect([1, 2, 3, 4]).toContain(3);
    expect([1, 2, 3, 4]).not.toContain(6);
    expect('jasmine karma').toContain('karma')
  });

  it('Example of toBeCloseTo()', function () {
    // expect(45.54).toBeCloseTo(45.5, 2); //fail
    expect(45.54).toBeCloseTo(45, 0); //pass
    expect(45.54).toBeCloseTo(45.5, 1); //pass
  });

  it('Example of toMatch()', function () {
    expect('jasmine karma session').toMatch(/sessio/);
    // expect('jasmine karma session').toMatch(/ssessio/); fail
  });
});

describe('Different Methods of null Check', function () {

  it('Example of toBeDefined()', function () {
    expect(testValue.name).toBeDefined();
  });

  it('Example of toBeUndefined()', function () {
    expect(testValue.firstName).toBeUndefined();
  });

  it('Example of toBeNull()', function () {
    expect(testValue.nullValue).toBeNull();
  });
});

describe('Different Methods of inequality Check', function () {

  it('Example of toBeGreaterThan()', function () {
    expect(testValue.inequalityCheckValue).toBeGreaterThan(11);
  });

  it('Example of toBeGreaterThanOrEqual()', function () {
    expect(testValue.inequalityCheckValue).toBeGreaterThanOrEqual(12);
  });

  it('Example of toBeLessThan()', function () {
    expect(testValue.inequalityCheckValue).toBeLessThan(13);
  });

  it('Example of toBeLessThanOrEqual()', function () {
    expect(testValue.inequalityCheckValue).toBeLessThanOrEqual(12);
  });
});

describe('Exception Check', function () {
  it('Example of toThrow() matcher', function () {
    expect(function () { throwError() }).toThrow();
  })

  // it('Example of toThrow() matcher', function () {
  //   expect(throwError).toThrow();
  // })

  it('Example of toThrowError() matcher', function () {
    expect(function () { exceptionCheckExp() }).toThrowError(/Invalid/);
    expect(function () { exceptionCheckExp({}) }).toThrowError(/Name/);
  })
})

describe('NaN check block', function () {
  it('Example of toBeNaN() matcher method', function () {
    expect( 'df' / 0).toBeNaN();
    expect(convertNumber('3')).not.toBeNaN();
  });
});

describe("A spec (with setup and tear-down)", function() {
  var foo = 0;

  beforeEach(function() {
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("first spec, foo should be one", function() {
    expect(foo).toEqual(1);
  });

  it("second spec, foo should be one", function() {
    expect(foo).toEqual(1);
  });
});

//Nested describe
describe("A spec", function() {
  var foo;

  beforeAll(function() {
    foo = 0;
  })

  beforeEach(function() {
    // foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe("nested inside a second describe", function() {
    var bar;

    beforeEach(function() {
      bar = 1;
      // foo += 1;
    });

    // it("can reference both scopes as needed ", function() {
    //   expect(foo).not.toEqual(bar);
    // });

    it("can reference both scopes as needed ", function() {
      expect(foo).toEqual(bar);
    });
  });
});

describe("Syn function example", function() {
  beforeAll(function() {

    spyOn(spyObject, 'setValue');

    spyObject.setValue(1235);
    spyObject.setValue(456);
    spyOn(spyObject, 'getValue');
    spyObject.getValue()
  });

  it("tracks that the spy was called", function() {
    expect(spyObject.setValue).toHaveBeenCalled();
    expect(spyObject.getValue).toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(spyObject.setValue).toHaveBeenCalledWith(1235);
    expect(spyObject.setValue).toHaveBeenCalledWith(456);
  });
});

describe("A spy, when configured to call through", function() {
  var fetchedValue;

  beforeAll(function() {
    spyOn(spyObject, 'getValue').and.callThrough();
    spyObject.setValue(123);
    fetchedValue = spyObject.getValue();
  });

  it("tracks that the spy was called", function() {
    expect(spyObject.getValue).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(spyObject.value).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedValue).toEqual(123);
  });
});

	
describe("A spy, when configured to fake a return value", function() {
  var fetchedValue;

  beforeAll(function() {
    spyOn(spyObject, 'getValue').and.returnValue(745);
    spyObject.setValue(123);
    fetchedValue = spyObject.getValue();
  });

  it("tracks that the spy was called", function() {
    expect(spyObject.getValue).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(spyObject.value).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedValue).toEqual(745);
  });
});