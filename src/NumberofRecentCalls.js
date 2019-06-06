var RecentCounter = function () {
  this.res = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  while (this.res.length && this.res[0] < t - 3000) {
    this.res.shift()
  }
  this.res.push(t)
  return this.res.length || null
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
