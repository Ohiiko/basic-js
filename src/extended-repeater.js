import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, {repeatTimes =  1, separator = "+", addition = "", additionRepeatTimes = 0, additionSeparator = '|'}) {
  let result = "";
    let repeat = (addition + additionSeparator).repeat(additionRepeatTimes);
    repeat = repeat.slice(0, repeat.length - additionSeparator.length);
    if (additionRepeatTimes == 0) {
      repeat = addition;}
    result = (str + repeat + separator).repeat(repeatTimes);
    result = result.slice(0, result.length - separator.length);
    return result;
}
