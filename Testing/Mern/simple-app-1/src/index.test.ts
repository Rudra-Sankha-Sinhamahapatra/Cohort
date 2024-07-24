import {describe, expect, it, test} from '@jest/globals';
import {sum} from './index';
import { mul } from './index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('handle negative numbers correctly', () =>{
    it("sum of -1 and -2 is -3", () =>{
        const finalAnswer=sum(-1,-2);
        expect(finalAnswer).toBe(-3);
    })
})

describe('mul module',() => {
    test('multiplies 1 * 2 to equal 2',() => {
        expect(mul(1,2)).toBe(2);
    })
})