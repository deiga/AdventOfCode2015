var readline = require('readline');

var feet = 0;
var rl = readline.createInterface({
  input: require('fs').createReadStream('./day2/input.txt')
});

rl.on('line', function (line) {
  var measurements = line.split('x');
  var length = measurements[0];
  var width = measurements[1];
  var height = measurements[2];
  feet += feetOfWrappingPaper(length, width, height);
  console.log(feet);
})

function surfaceOfBox(l, w, h) {
  return 2*l*w + 2*w*h + 2* h*l;
}

function feetOfWrappingPaper(l, w, h) {
  return surfaceOfBox(l,w,h) + smallestSide(l,w,h);
}

function smallestSide(l, w, h) {
  var bot = l*w;
  var side = w*h;
  var front = h*l;
  if (bot <= side && bot <= front) {
    return bot;
  } else if (side <= bot && side <= front) {
    return side;
  } else {
    return front;
  }
}
console.log(feetOfWrappingPaper(2,3,4), 58);
console.log(feetOfWrappingPaper(1,1,10), 43);
