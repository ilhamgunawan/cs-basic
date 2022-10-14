/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-spread */
/* eslint-disable prefer-arrow-callback */
/*
  ArrayList

  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):

  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses,
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
  constructor() {
    this.array = {};
    this.length = 0;
  }

  push(value) {
    this.array[this.length] = value;
    this.length += 1;
  }

  pop() {
    const lastItem = this.array[this.length - 1];
    if (lastItem) {
      delete this.array[this.length - 1];
      this.length -= 1;
    }
    return lastItem;
  }

  get(index) {
    return this.array[index];
  }

  delete(index) {
    const valueToDelete = this.array[index];
    if (valueToDelete) {
      for (const [key, value] of Object.entries(this.array)) {
        if (parseInt(key, 10) > index) {
          this.array[parseInt(key, 10) - 1] = value;
        }
      }
      delete this.array[this.length - 1];
      this.length -= 1;
    }
    return valueToDelete;
  }

  print() {
    return Object.values(this.array);
  }
}

// const myArray = new ArrayList();
// console.log({ length: myArray.length, array: myArray.print() });

// myArray.push('hello');
// console.log({ length: myArray.length, array: myArray.print() });

// myArray.push('world');
// console.log({ length: myArray.length, array: myArray.print() });

// myArray.pop();
// console.log({ length: myArray.length, array: myArray.print() });

// myArray.push('budi');
// console.log({ length: myArray.length, array: myArray.print() });

// myArray.push('burhan');
// console.log({ length: myArray.length, array: myArray.print() });

// const getValue1 = myArray.get(2);
// console.log({ getValue1 });

// myArray.delete(1);
// console.log({ length: myArray.length, array: myArray.print() });

// const getValue2 = myArray.get(2);
// console.log({ getValue2 });

// unit tests
// do not modify the below code
describe('ArrayList', function () {
  const range = (length) => Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = (length) => range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new ArrayList();
  });

  test('constructor', () => {
    expect(list).toEqual(expect.any(ArrayList));
  });

  test('push', () => {
    abcRange(26).map((character) => list.push(character));
    expect(list.length).toEqual(26);
  });

  test('pop', () => {
    abcRange(13).map((character) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual('c');
  });

  test('get', () => {
    list.push('first');
    expect(list.get(0)).toEqual('first');
    list.push('second');
    expect(list.get(1)).toEqual('second');
    expect(list.get(0)).toEqual('first');
    abcRange(26).map((character) => list.push(character));
    expect(list.get(27)).toEqual('z');
    expect(list.get(0)).toEqual('first');
    expect(list.get(9)).toEqual('h');
    list.pop();
    expect(list.get(list.length - 1)).toEqual('y');
  });

  test('delete', () => {
    abcRange(26).map((character) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual('m');
    expect(list.get(13)).toEqual('o');
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual('b');
  });
});
