import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (typeof value === 'undefined') value = ' '
    this.arr.push(String(value))
    return this
  },

  removeLink(position) {
    if (position <= 0 || position > this.arr.length || typeof position != 'number') {
      this.arr = []
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.arr.reverse()
    return this
  },

  finishChain() {
    let result = ''
    if (this.arr.length > 0) result = '( ' + this.arr.join(' )~~( ') + ' )'
    this.arr = []
    return result
  }
};
