/**
 * @constructor
 */
var Stack = function () {
  this.q1 = []
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function (x) {
  this.q1.push(x)
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function () {
  this.q1.length = this.q1.length - 1
};

/**
 * @returns {number}
 */
Stack.prototype.top = function () {
  return this.q1.length == 0 ? null : this.q1[this.q1.length - 1]
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function () {
  return this.q1.length == 0 
};