var MyCalendar = function () {
  this.order = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  var res = this.order.every(
    (item) => Math.max(item[0], start) >= Math.min(end, item[1])
  );
  if (res) this.order.push([start, end]);
  return res;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */
