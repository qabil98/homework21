task1

function average(arr){
  if(arr.length==0){
    return 0;
  }
  let sum =0;
  for(i=0; i<arr.length; i++){
    sum = sum+arr[i]

  }

  return sum/arr.length
}

let numbers=[3,6,8,9,10];
let numAverage= average(numbers);
// console.log(numAverage);





// task 2 


let a= "qabildshfbsdj";

function reverse(str){

let reverseStr = str.split("").reverse().join("") ;
return reverseStr;


}

let strReverse = reverse(a);
// console.log(strReverse);





task 4


let fruits = ["apple","banana","orange","strawberry"];


function length(arr){
   let longStr=""

   for (i=0; i<arr.length; i++){
    if(arr[i].length > longStr.length){
      longStr=arr[i]
      
    }

   }
   return longStr;

}

let longestStr= length(fruits);
console.log(longestStr);





function sum(num){
  let sum=0
  let numStr=num.toString()


  for(i=0;i<numStr.length;i++){
    sum+=parseInt(numStr[i]);

  }
  return sum;


}




let num= 546590;
let digitSum=sum(num);
console.log(digitSum);si












