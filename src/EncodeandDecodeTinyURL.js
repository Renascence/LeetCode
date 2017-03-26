/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const urls={}
var encode = function (longUrl) {
  const code = parseInt(Math.random()*100000)
  urls[code] = longUrl
  return `http://tinyurl.com/${code}`
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return urls[shortUrl.split('/').reverse()[0]]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */