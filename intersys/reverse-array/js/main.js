//Write a program that takes two 11 integer array elements (one input per line) and gives output YES, if there's a permutation of the first array that is equal to the second array or gives output NO, if there's no such permutation.

let reverseArray = (arr, n) => {
    if(n == 0){
       return [];
    }
    
    return [arr[n-1]].concat(reverseArray(arr, --n));
  }

  console.log(reverseArray([1,2,3], 3));
  console.log(reverseArray([1,2,1,0],4 ));









