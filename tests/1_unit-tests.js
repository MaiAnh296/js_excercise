const chai = require("chai");
const assert = chai.assert;

suite("Unit Tests", function () {
  suite("Basic Assertions", function () {
    // #1
    // test("#isNull, #isNotNull", function () {
    //   assert.fail(
    //     null,
    //     "This is an optional error description - e.g. null is null"
    //   );
    //   assert.fail(1, "1 is not null");
    // });
    /** 1 - Use assert.isNull() or assert.isNotNull() to make the tests pass. **/
    test("#isNull, #isNotNull", function () {
      assert.isNull(
        null,
        "this is an optional error description - e.g. null is null"
      );
      assert.isNotNull(1, "1 is not null");
    });

    // #2
    //   test("#isDefined, #isUndefined", function () {
    //     assert.fail(null, "null is not undefined");
    //     assert.fail(undefined, "undefined IS undefined");
    //     assert.fail("hello", "A string is not undefined");
    //   });
    /** 2 - Use assert.isDefined() or assert.isUndefined() to make the tests pass. **/
    test("#isDefined, #isUndefined", function () {
      assert.isDefined(null, "null is not undefined");
      assert.isUndefined(undefined, "undefined IS undefined");
      assert.isDefined("hello", "A string is not undefined");
    });
    //   // #3
    //   test("#isOk, #isNotOk", function () {
    //     assert.fail(null, "null is falsey");
    //     assert.fail("I'm truthy", "A string is truthy");
    //     assert.fail(true, "true is truthy");
    //   });
    /** 3 - Use assert.isOk() or assert.isNotOk() to make the tests pass. **/
    test("#isOk, #isNotOk", function () {
      assert.isNotOk(null, "null is falsey");
      assert.isOk("I'm truthy", "A string is truthy");
      assert.isOk(true, "true is truthy");
    });
    // #4
    // test("#isTrue, #isNotTrue", function () {
    //   assert.fail(true, "true is true");
    //   assert.fail(
    //     !!"double negation",
    //     "Double negation of a truthy value is true"
    //   );
    //   assert.fail(
    //     { value: "truthy" },
    //     "Objects are truthy, but are not boolean values"
    //   );
    // });
    /** 4 - Use assert.isTrue() or assert.isNotTrue() to make the tests pass. **/
    test("#isTrue, #isNotTrue", function () {
      assert.isTrue(true, "true is true");
      assert.isTrue(
        !!"double negation",
        "Double negation of a truthy value is true"
      );
      assert.isNotTrue(
        { value: "truthy" },
        "Objects are truthy, but are not boolean values"
      );
    });
  });

  // // -----------------------------------------------------------------------------

  suite("Equality", function () {
    //   // #5
    //   test("#equal, #notEqual", function () {
    //     assert.fail(12, "12", "Numbers are coerced into strings with ==");
    //     assert.fail({ value: 1 }, { value: 1 }, "== compares object references");
    //     assert.fail(6 * "2", "12");
    //     assert.fail(6 + "2", "12");
    //   });

    /** 5 - Use assert.equal() or assert.notEqual() to make the tests pass. **/
    test("#equal, #notEqual", function () {
      assert.equal(12, "12", "Numbers are coerced into strings with ==");
      assert.notEqual(
        { value: 1 },
        { value: 1 },
        "== compares object references"
      );
      assert.equal(6 * "2", "12");
      assert.notEqual(6 + "2", "12");
    });
    //   // #6
    //   test("#strictEqual, #notStrictEqual", function () {
    //     assert.fail(6, "6");
    //     assert.fail(6, 3 * 2);
    //     assert.fail(6 * "2", 12);
    //     assert.fail([1, "a", {}], [1, "a", {}]);
    //   });

    /** 6 - Use assert.strictEqual() or assert.notStrictEqual() to make the tests pass. **/
    test("#strictEqual, #notStrictEqual", function () {
      assert.notStrictEqual(6, "6");
      assert.strictEqual(6, 3 * 2);
      assert.strictEqual(6 * "2", 12);
      assert.notStrictEqual([1, "a", {}], [1, "a", {}]);
    });
    //   // #7
    //   test("#deepEqual, #notDeepEqual", function () {
    //     assert.fail(
    //       { a: "1", b: 5 },
    //       { b: 5, a: "1" },
    //       "The order of keys doesn't matter"
    //     );
    //     assert.fail(
    //       { a: [5, 6] },
    //       { a: [6, 5] },
    //       "The order of array elements does matter"
    //     );
    //   });

    /** 7 - Use assert.deepEqual() or assert.notDeepEqual() to make the tests pass. **/
    test("#deepEqual, #notDeepEqual", function () {
      assert.deepEqual(
        { a: "1", b: 5 },
        { b: 5, a: "1" },
        "The order of keys doesn't matter"
      );
      assert.notDeepEqual(
        { a: [5, 6] },
        { a: [6, 5] },
        "The order of array elements does matter"
      );
    });
  });

  // // -----------------------------------------------------------------------------

  function weirdNumbers(delta) {
    return 1 + delta - Math.random();
  }

  suite("Comparisons", function () {
    // #8
    //   test("#isAbove, #isAtMost", function () {
    //     assert.fail("hello".length, 5);
    //     assert.fail(1, 0);
    //     assert.fail(Math.PI, 3);
    //     assert.fail(1 - Math.random(), 1);
    //   });

    /** 8 - Use assert.isAbove() and assert.isAtMost() to make the tests pass. **/
    test("#isAbove, #isAtMost", function () {
      assert.isAtMost("hello".length, 5);
      assert.isAbove(1, 0);
      assert.isAbove(Math.PI, 3);
      assert.isAtMost(1 - Math.random(), 1);
    });
    //   // #9
    //   test("#isBelow, #isAtLeast", function () {
    //     assert.fail("world".length, 5);
    //     assert.fail(2 * Math.random(), 0);
    //     assert.fail(5 % 2, 2);
    //     assert.fail(2 / 3, 1);
    //   });

    /** 9 - Use assert.isBelow() and assert.isAtLeast() to make the tests pass. **/
    test("#isBelow, #isAtLeast", function () {
      assert.isAtLeast("world".length, 5);
      assert.isAtLeast(2 * Math.random(), 0);
      assert.isBelow(5 % 2, 2);
      assert.isBelow(2 / 3, 1);
    });
    //   // #10
    //   test("#approximately", function () {
    //     assert.fail(weirdNumbers(0.5), 1, 0);
    //     assert.fail(weirdNumbers(0.2), 1, 0);
    //   });

    /** 10 - Use assert.approximately() to make the tests pass. **/
    test("#approximately", function () {
      assert.approximately(weirdNumbers(0.5), 1, 0.5);
      assert.approximately(weirdNumbers(0.2), 1, 0.8);
    });
  });

  // // -----------------------------------------------------------------------------

  const winterMonths = ["dec,", "jan", "feb", "mar"];
  const backendLanguages = ["php", "python", "javascript", "ruby", "asp"];
  suite("Arrays", function () {
    //   // #11
    //   test("#isArray, #isNotArray", function () {
    //     assert.fail(
    //       "isThisAnArray?".split(""),
    //       "String.prototype.split() returns an array"
    //     );
    //     assert.fail([1, 2, 3].indexOf(2), "indexOf returns a number");
    //   });

    /** 11 - Use assert.isArray() or assert.isNotArray() to make the tests pass. **/
    test("#isArray, #isNotArray", function () {
      assert.isArray(
        "isThisAnArray?".split(""),
        "String.prototype.split() returns an array"
      );
      assert.isNotArray([1, 2, 3].indexOf(2), "indexOf returns a number");
    });
    //   // #12
    //   test("Array #include, #notInclude", function () {
    //     assert.fail(winterMonths, "jul", "It's summer in july...");
    //     assert.fail(backendLanguages, "javascript", "JS is a backend language");
    //   });

    /** 12 - Test the arrays winterMonths and backendLanguages. **/
    test("Array #include, #notInclude", function () {
      assert.notInclude(winterMonths, "jul", "It's summer in july...");
      assert.include(
        backendLanguages,
        "javascript",
        "JS is a backend language"
      );
    });
  });

  // -----------------------------------------------------------------------------

  const formatPeople = function (name, age) {
    return "# name: " + name + ", age: " + age + "\n";
  };
  suite("Strings", function () {
    // #13
    //   test("#isString, #isNotString", function () {
    //     assert.fail(Math.sin(Math.PI / 4), "A float is not a string");
    //     assert.fail(
    //       process.env.PATH,
    //       "An env variable is a string (or undefined)"
    //     );
    //     assert.fail(JSON.stringify({ type: "object" }), "JSON is a string");
    //   });

    /** 13 - Use assert.isString() or assert.isNotString() to make the tests pass. **/
    test("#isString, #isNotString", function () {
      assert.isNotString(Math.sin(Math.PI / 4), "A float is not a string");
      assert.isString(
        process.env.PATH,
        "An env variable is a string (or undefined)"
      );
      assert.isString(JSON.stringify({ type: "object" }), "JSON is a string");
    });
    //   // #14
    //   test("String #include, #notInclude", function () {
    //     assert.fail("Arrow", "row", "'Arrow' contains 'row'");
    //     assert.fail("dart", "queue", "But 'dart' doesn't contain 'queue'");
    //   });

    /** 14 - Use assert.include() or assert.notInclude() to make the tests pass. **/
    test("String #include, #notInclude", function () {
      assert.include("Arrow", "row", "'Arrow' contains 'row'");
      assert.notInclude("dart", "queue", "But 'dart' doesn't contain 'queue'");
    });
    //   // #15
    //   test("#match, #notMatch", function () {
    //     const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
    //     assert.fail(formatPeople("John Doe", 35), regex);
    //     assert.fail(formatPeople("Paul Smith III", "twenty-four"), regex);
    //   });

    /** 15 - Use assert.match() or assert.notMatch() to make the tests pass. **/
    test("#match, #notMatch", function () {
      const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
      assert.match(formatPeople("John Doe", 35), regex);
      assert.notMatch(formatPeople("Paul Smith III", "twenty-four"), regex);
    });
  });

  // -----------------------------------------------------------------------------

  const Car = function () {
    this.model = "sedan";
    this.engines = 1;
    this.wheels = 4;
  };

  const Plane = function () {
    this.model = "737";
    this.engines = ["left", "right"];
    this.wheels = 6;
    this.wings = 2;
  };

  const myCar = new Car();
  const airlinePlane = new Plane();

  suite("Objects", function () {
    //   // #16
    //   test("#property, #notProperty", function () {
    //     assert.fail(myCar, "wings", "Cars don't have wings");
    //     assert.fail(airlinePlane, "engines", "Planes have engines");
    //     assert.fail(myCar, "wheels", "Cars have wheels");
    //   });

    /** 16 - Use assert.property() or assert.notProperty() to make the tests pass. **/
    test("#property, #notProperty", function () {
      assert.notProperty(myCar, "wings", "Cars don't have wings");
      assert.property(airlinePlane, "engines", "Planes have engines");
      assert.property(myCar, "wheels", "Cars have wheels");
    });
    //   // #17
    //   test("#typeOf, #notTypeOf", function () {
    //     assert.fail(myCar, "object");
    //     assert.fail(myCar.model, "string");
    //     assert.fail(airlinePlane.wings, "string");
    //     assert.fail(airlinePlane.engines, "array");
    //     assert.fail(myCar.wheels, "number");
    //   });

    /** 17 - Use assert.typeOf() or assert.notTypeOf() to make the tests pass. **/
    test("#typeOf, #notTypeOf", function () {
      assert.typeOf(myCar, "object");
      assert.typeOf(myCar.model, "string");
      assert.typeOf(airlinePlane.wings, "number");
      assert.notTypeOf(airlinePlane.engines, "object");
      assert.typeOf(myCar.wheels, "number");
    });
    //   // #18
    //   test("#instanceOf, #notInstanceOf", function () {
    //     assert.fail(myCar, Plane);
    //     assert.fail(airlinePlane, Plane);
    //     assert.fail(airlinePlane, Object);
    //     assert.fail(myCar.wheels, String);
    //   });

    /** 18 - Use assert.instanceOf() or assert.notInstanceOf() to make the tests pass. **/
    test("#instanceOf, #notInstanceOf", function () {
      assert.notInstanceOf(myCar, Plane);
      assert.instanceOf(airlinePlane, Plane);
      assert.instanceOf(airlinePlane, Object);
      assert.notInstanceOf(myCar.wheels, String);
    });
  });
});

// -----------------------------------------------------------------------------