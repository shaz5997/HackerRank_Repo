 // calculate aLast integer
  const aLast = a[a.length - 1];
  // calculate bFirst integer
  const bFirst = b[0];
  
  // check which number(s) between aLast and bFist are divided evenly into and put into a new array
  const arrTemp = [];
  for(let i = aLast; i <= bFirst; i++) {
    let flagA = true;
    for(const elementA of a) {
      if(i % elementA !== 0) {
        flagA = false;
      }
    }
    if(flagA) {
      arrTemp.push(i);
    }
  }
 
  // check which numbers divide new array elements evenly into and put into a result array
  const arrResult = [];
  for(let i=0; i < arrTemp.length; i++) {
    let flagB = true;
    for(const elementB of b) {
      if(elementB % arrTemp[i] !== 0) {
        flagB = false;
      }
    }
    if(flagB) {
      arrResult.push(arrTemp[i]);
    }
  }
  
  // return resultant array length
  return arrResult.length;
}

const a = [2, 4];
const b = [16, 32, 96];

console.log(getTotalX(a, b));


// O(n log(n)) solution.

function getTotalX2(a, b) {
  // 1. find the LCM (Least Common Multiple) of all the integers of array A.
  // 2. find the GCD (Greatest Common Divisor) of all the integers of array B.
  // 3. Count the number of multiples of LCM that evenly divides the GCD.
}


const a2 = [2, 4];
const b2 = [16, 32, 96];

console.log(getTotalX2(a2, b2));