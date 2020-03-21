var dayOfTheWeek = function (day, month, year) {
  const date = new Date(`${year} ${month} ${day}`)
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]
};