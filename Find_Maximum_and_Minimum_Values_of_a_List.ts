/*
SAMPLE TEST

/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import { min, max } from './solution';
import { assert } from 'chai';

const Test = {
  expect: (...args) => (assert as any)(...args),
  assertEquals: (...args) => (assert as any).equal(...args),
};

describe("Test", function(){
  it("Examples", function(){
    Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    Test.assertEquals(max([5]), 5);
  });
});
*/

//SOLUCION

export const min = (list: number[]): number => {
  return Math.min(...list);
};

export const max = (list: number[]): number => {
return Math.max(...list);
};
