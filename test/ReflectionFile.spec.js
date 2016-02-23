var ReflectionFile = require('../src/ReflectionFile');

describe('ReflectionFile', function () {

  beforeEach(function () {

  });

  function mock() {
    var TestClass = function () {
      this.publicThisProperty = "publicThisProperty";
      this.publicThisMethod = function () {

      };

      var privateConstructorMethod = function () {

      };
      var privateProperty = "privateProperty";
    };

    var privateStaticProperty = "privateStaticProperty";
    var privateStaticMethod = function () {

    };

    TestClass.prototype.publicProtoProperty = "publicProtoProperty";
    TestClass.prototype.publicProtoMethod = function () {

    };

    TestClass.publicStaticProperty = "publicStaticProperty";
    TestClass.publicStaticMethod = function () {

    };

    return TestClass;
  }

  it('should work', function () {

    var reflectedClass = new ReflectionScope(mock);
    expect(true).toBe(true);
  });

});