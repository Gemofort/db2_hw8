const perm = xs => {
  let res = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if (!rest.length) {
      res.push([xs[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        res.push([xs[i]].concat(rest[j]));
      }
    }
  }
  return res;
};

module.exports = { perm };
