var readline = require('readline');

var wrappingPaper = 0;
var ribbon = 0;

var rl = readline.createInterface({
  input: require('fs').createReadStream('./day2/input.txt')
});

rl.on('line', function (line) {
  var measurements = line.split('x');
  var length = measurements[0];
  var width = measurements[1];
  var height = measurements[2];
  wrappingPaper += feetOfWrappingPaper(length, width, height);
  ribbon += feetOfRibbon(length, width, height);
  console.log(wrappingPaper, ribbon);
})

function surfaceOfBox(l, w, h) {
  return 2*l*w + 2*w*h + 2* h*l;
}

function feetOfWrappingPaper(l, w, h) {
  return surfaceOfBox(l,w,h) + smallestAreaOfSide(l,w,h);
}

function smallestAreaOfSide(l, w, h) {
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

function feetOfRibbon(l, w, h) {
  return smallesPerimeter([l, w, h]) + l*w*h;
}

function smallesPerimeter(measurements) {
  return measurements.sort(function (a, b) { return a - b; }).splice(0,2).reduce(function (sum, item) { return sum + 2*item; }, 0)
}
console.log(feetOfWrappingPaper(2,3,4), 58);
console.log(feetOfWrappingPaper(1,1,10), 43);

console.log(feetOfRibbon(2,3,4), 34);
console.log(feetOfRibbon(1,1,10), 14);
console.log(feetOfRibbon(1,2,10), 26);
console.log(feetOfRibbon(1,3,10), 38);
