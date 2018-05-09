/**
 * name: hello.js
 * desc: This file have some function, which we have to test
 * author: Anuj Gupta
 */

var testValue = {

  currentVal: 0,
  name: { key: "jasmine" },
  name1: { key: "jasmine" },
  nullValue: null,
  inequalityCheckValue: 12

};

function getFileName() {
  return 'hello.js'
}

function hasRequiredField(data, key) {
  return data[key] ? true : false
}

function add(a, b) {
  return a + b;
}

function exampleOfBoolean(name) {
  return name === 'jasmine' ? true : false;
}

function throwError() {
  throw new Error()
}

function exceptionCheckExp(data) {
  if(!data) {
    throw new Error('Invalid param')
  }
  if (!data.name) {
    throw new Error('Name is missing')
  }
}

function convertNumber(arg) {
  return Number(arg)
}


var spyObject = {
  value: null,
  setValue: function(value) {
    this.value = value
  },
  getValue: function() {
    return this.value
  }

}

