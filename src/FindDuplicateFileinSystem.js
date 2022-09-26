/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const reg = new RegExp('\\((.| )+?\\)', 'igm');
  const hash = {};
  paths.forEach((item) => {
    const [path, ...file] = item.split(' ');
    file.forEach((i) => {
      const content = i.match(reg)[0];
      const name = i.replace(content, '');
      if (hash[content]) {
        hash[content].push(`${path}/${name}`);
      } else {
        hash[content] = [`${path}/${name}`];
      }
    });
  });
  const res = [];
  for (let i in hash) {
    if (hash[i].length > 1) {
      res.push(hash[i]);
    }
  }
  return res;
};
