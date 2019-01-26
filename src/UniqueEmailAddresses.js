/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let hashMap = {};
  const arr = emails.map(email => {
    const data = email.split('@')
    let localname = data[0].split('+')[0].replace((/(\.)/g), '')
    hashMap[`${localname}${data[1]}`] = true
  })
  return Object.keys(hashMap).length;
};