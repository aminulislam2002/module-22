const aminul = 84;
const tamima = 75;
if (aminul > tamima) {
  console.log("Aminul marks is too much! He is the first boy."); // return it
} else {
  console.log("Tamima marks is too much! She is the first girl.");
}

const aminulIslam = 84;
const tamimaEma = 99;
const emon = 77;

if (aminulIslam > tamimaEma && aminulIslam > emon) {
  console.log("Aminul Islam is win!");
} else if (tamimaEma > aminulIslam && tamimaEma > emon) {
  console.log("Tamima Ema is win!");
} else {
  console.log("Emon is win!");
}

// Home work
// ex-01 Write a function that will take 3 numbers that will return the max number
// ex-02 Write a function that will take 3 parameters taht will return the min number

// first time do it using if/ else if/ else
// second time do it using Math.max and Matha.min

// ex-01
function getMax01(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(getMax01(5, 10, 15));

function getMax02(a1, b1, c1) {
  maxNumber = Math.max(a1, b1, c1);
  return maxNumber;
}
console.log(getMax02(50, 100, 75));

// ex-02
function getMin01(x, y, z) {
  if (x < y && x < z) {
    return x;
  } else if (y < x && y < z) {
    return y;
  } else {
    return z;
  }
}
console.log(getMin01(3, 2, 1));

function getMin02(x1, y1, z1) {
  minNumber = Math.min(x1, y1, z1);
  return minNumber;
}
console.log(getMin02(1, 2, 3));
