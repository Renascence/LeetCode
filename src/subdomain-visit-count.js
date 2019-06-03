/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const res = []
  let obj = {}
  cpdomains.forEach(item => {
    let [time, domin] = item.split(' ')
    while(domin.indexOf('.') !== -1) {
      if (obj[domin]) {
        obj[domin] += ~~time
      } else {
        obj[domin] = ~~time
      }
      domin = domin.slice(domin.indexOf('.') + 1)
    }
    if (obj[domin]) {
      obj[domin] += ~~time
    } else {
      obj[domin] = ~~time
    }
  })
  Object.keys(obj).forEach(dom => {
    res.push(`${obj[dom]} ${dom}`)
  })
  return res
};
