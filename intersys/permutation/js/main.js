
function isPermutation(a,b) {
    let map = a.reduce((acc,c) => {acc[c] = (acc[c] || 0) + 1; return acc},{})
    for (el of b) {
      if (!map[el] || map[el] == 0) {
        return "NO";
      } else {
        map[el]--;
      }
    }
    for (k in map) {
      if (map[k] != 0) {
        return "NO";
      }
    }
    return "YES";
  }

console.log(isPermutation([1,2,3,4,5,6,7,8,9,10,11],[6,5,4,3,2,0,11,10,9,8,7]));
console.log(isPermutation([1,2,3],[3,1,2]));