var originalDigits = function (s) {
  var arr = [];
  for (var i = 0; i < 26; i++) {
    arr[i] = 0;
  }
  for (i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }
  var res = ['', '', '', '', '', '', '', '', '', ''];
  var two = '';
  for (i = 0; i < arr[22]; i++) {
    res[2] += '2';
  }
  arr[19] -= arr[22];
  arr[14] -= arr[22];
  arr[22] = 0;
  for (i = 0; i < arr[23]; i++) {
    res[6] += '6';
  }
  arr[18] -= arr[23];
  arr[8] -= arr[23];
  arr[23] = 0;
  for (i = 0; i < arr[25]; i++) {
    res[0] += '0';
  }
  arr[4] -= arr[25];
  arr[17] -= arr[25];
  arr[14] -= arr[25];
  arr[25] = 0;
  for (i = 0; i < arr[6]; i++) {
    res[8] += '8';
  }
  arr[4] -= arr[6];
  arr[8] -= arr[6];
  arr[7] -= arr[6];
  arr[19] -= arr[6];
  arr[6] = 0;
  for (i = 0; i < arr[20]; i++) {
    res[4] += '4';
  }
  arr[5] -= arr[20];
  arr[14] -= arr[20];
  arr[17] -= arr[20];
  arr[20] = 0;
  for (i = 0; i < arr[18]; i++) {
    res[7] += '7';
  }
  arr[4] -= arr[18];
  arr[21] -= arr[18];
  arr[4] -= arr[18];
  arr[13] -= arr[18];
  arr[18] = 0;
  for (i = 0; i < arr[21]; i++) {
    res[5] += '5';
  }
  arr[5] -= arr[21];
  arr[8] -= arr[21];
  arr[4] -= arr[21];
  arr[21] = 0;
  for (i = 0; i < arr[17]; i++) {
    res[3] += '3';
  }
  arr[19] -= arr[17];
  arr[7] -= arr[17];
  arr[4] -= arr[17];
  arr[4] -= arr[17];
  arr[17] = 0;
  for (i = 0; i < arr[14]; i++) {
    res[1] += '1';
  }
  arr[13] -= arr[14];
  arr[4] -= arr[14];
  arr[14] = 0;
  for (i = 0; i < arr[8]; i++) {
    res[9] += '9';
  }
  return res.join('');
};
