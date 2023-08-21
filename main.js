function bubbleSortDescending(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function maxSubarraySum(arr, length) {
  if (length > arr.length) return;

  let max = 0;
  let temp = 0;

  for (let i = 0; i < length; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = length; i < arr.length; i++) {
    temp = temp - arr[i - length] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

function sumEvenNumbers(obj) {
  let total = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      total += sumEvenNumbers(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      total += obj[key];
    }
  }

  return total;
}

function generateRandomArray(length) {
  let temp = [];

  for (let i = 0; i < length; i++) {
    temp.push(Math.floor(Math.random() * 100));
  }

  return temp;
}

// Testing
for (let i = 1; i <= 3; i++) {
  console.log(`Answer of Question ${i}`);

  for (let j = 0; j < 3; j++) {
    i = parseInt(i);
    j = parseInt(j);

    let array = generateRandomArray(10);
    let object = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    };

    let input = i == 3 ? object : array;

    console.log(`Input : ${i == 3 ? JSON.stringify(input) : input}`);

    if (i == 1) output = bubbleSortDescending(input);
    if (i == 2) output = maxSubarraySum(input, Math.floor(Math.random() * 10));
    if (i == 3 && j == 0) output = sumEvenNumbers(input);

    console.log(`Output : ${output}`);

    if(i == 3 && j == 0) break;
  }
}