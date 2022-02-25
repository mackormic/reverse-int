module.exports = function reverse (n) {
  return reverseN(n);
}

function reverseN(n) {
  const num = [...n.toString()].reverse().join('');
    return num;
  }




