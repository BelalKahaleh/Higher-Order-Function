//Q1

const input = [1, 2, 3];

function arrPower(inputArray) {
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    result.push(Math.pow(2, inputArray[i]));
  }
  return result;
}


function arrPowerForEach(inputArray) {
  let resultArr = [];
  inputArray.forEach((elemnt) => {
    resultArray.push(Math.pow(2, elemnt));
  });
  return resultArr;
}


function arrPowerMap(inputArray) {
  return inputArray.map((element) => Math.pow(2, element));
}

console.log("disolay loop: ", arrPower(input));
console.log("display forEach: ", arrPowerForEach(input));
console.log("display Map: ", arrPowerMap(input));

//Q2
const oddeven = [1, 2, 3, "Belal"];

function evenOdd(inputArray) {
  return inputArray.map((element) => {
    if (typeof element !== "number") {
      return "N/A";
    }
    return element % 2 === 0 ? "even" : "odd";
  });
}
console.log(evenOdd(oddeven));

//Q3
const backNames = ["Belal","Tarawneh","takreez",];
function returnNames(inputArray) {
  let inNames = [];
  inputArray.forEach((name) => {
    inNames.push(name);
  });
  return inNames;
}

console.log(returnNames(backNames));

//Q4

const fizzOrBuzz = [1,7,5,8,5,3,15,177,35];
function fizzBuzz(inputArr) {
  return inputArr.map((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      return "Fizz Buzz";
    } else if (element % 3 === 0) {
      return "Fizz";
    } else if (element % 5 === 0) {
      return "Buzz";
    } else {
      return element;
    }
  });
}
console.log(fizzBuzz(fizzOrBuzz));