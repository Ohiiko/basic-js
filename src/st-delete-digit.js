import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
let arr  = n.toString().split("")
let arrOfNumbers = arr.map(i => Number.parseInt(i))
let min = Math.min(...arrOfNumbers);
let smallStr = min.toString();
let indexOfSmall = arr.indexOf(smallStr);

arr.splice(indexOfSmall, 1);

return Number.parseInt(arr.join(''));

}
