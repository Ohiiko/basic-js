import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = []
  let lastElement = null
  const sequences = ['--double-prev', '--discard-prev', '--discard-next', '--double-next', 'done']

  arr.forEach(el => {
    switch (el) {

      case '--double-prev':
        if (sequences.includes(lastElement)) {
          lastElement = null
          break
        }
        if (result.length) result.push(lastElement)
        break

      case '--discard-prev':
        if (sequences.includes(lastElement)) break
        result.pop()
        break

      case '--discard-next':
      case '--double-next':
        lastElement = el
        break

      default:
        if (lastElement === '--discard-next') {
          lastElement = 'done'
          break
        }
        if (lastElement === '--double-next') result.push(el)
        lastElement = el
        result.push(el)
    }
  })
  return result
}
