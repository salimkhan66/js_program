// =========================max value====================
function maxValue() {
  let arr = [3, 10, 5, 1000, 6, 1, 8, 20];

  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(max);
  console.log(min);
}

maxValue()

// ===========================Min value=======================

function minValue() {
  let arr = [10, 32, 3, 2, 52, 23, 1];

  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
}
minValue()
