
console.log("------------------------------------------------");
for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {  
        console.log(i, "FizzBuzz");
    }
    else if (i % 3 == 0) {  
        console.log(i, "Fizz");
    }
    else if (i % 5 == 0) {  
        console.log(i, "Buzz");
    }
}


var tab = [
    {
        name: "oussama",
        age: 20,
        height: 186,
        favColor: "blue"
    },
    {
        name: "alex",
        age: 25,
        height: 170,
        favColor: "pink"
    }
];


for (var i = 0; i < 2; i++) {
    console.log(tab[i].name, "´s age is", tab[i].age ,"yo");
    console.log(tab[i].name, "´s height is", tab[i].height ,"cm");
    console.log(tab[i].name, "´s favorite color is", tab[i].favColor);
}

 console.log()
 console.log()
 
 var arr = [10, 13, 5, 2, 17,4,21];

var even = [] ;
var odd = [];


for (var i = 0; i < 7; i++) {
    if (arr[i] % 2 == 0) {
        even.push(arr[i]); 
    } else {
        odd.push(arr[i]); 
    }
}


console.log("Even numbers:", even);
console.log("Odd numbers:", odd);


 //---------------------------------------------------------------------------------------------

   //bubble sort 

function Bsort(arr) {
    for (var i = 0; i <arr.length; i++) {
       
            if (arr[i] > arr[i + 1]) {
            var tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
            i= -1
            }
    }
    return arr;
}

var arr = [2, 5, 0, 9, 12, 40, 3];
console.log(Bsort(arr));

 //---------------------------------------------------------------------------------   

//insertion sort

 function ISort(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length ; j++) {
        if (arr[i] > arr[j]) {
            var tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
      }
    }
    return arr;
}

var arr = [2, 5, 0, 9, 12, 40, 3];
console.log(ISort(arr));

//----------------------------------------------------------------------------------------

//linear search

var arr = [2, 5, 0, 9, 12, 40, 3];

function findIndex(arr, trg) {
   

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == trg) {
            return  i; 
         
        }
    }
return -1
}

   console.log("the element is at index",findIndex(arr ,18) )


   //-----------------------------------------------------------------------
   //binary search

   var arr = [2, 5, 0, 9, 12, 40, 3];
var target = 12;  
var result = binarySearch(arr, target);

function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length ;
    

    while (left <= right) {
       var mid = Math.floor((left+right )/ 2); 

        if (arr[mid] == target) {
            return mid;  
        } else if (arr[mid] < target) {
            left = mid ; 
        } else {
            right = mid ; 
        }
    }

    return -1;  
}

if (result != -1) {
    console.log("Element found at index: " , result);
} else {
    console.log("Element not found");
}

//------------------------------------------------------------------
var arr = [2, 5, 0, 9, 12, 40, 3];

function Tab(arr, index) {
    
    if (index < arr.length) {
        
        console.log("Index:", index, "|", "Value:", arr[index]);
        Tab(arr, index + 1);
    }
}

Tab(arr,0);

//------------------------------------------------------------------
function calculator(num1, num2, operator) {
    if (operator == '+') return num1 + num2;
    if (operator == '-') return num1 - num2;
    if (operator == '*') return num1 * num2;
    if (operator == '/') {
        if (num2 == 0) return "Error: Division by zero.";
        return num1 / num2;
      }
  }
  
  console.log(calculator(6, 2, '+')); 
  console.log(calculator(6, 2, '-')); 
  console.log(calculator(6, 2, '*')); 
  console.log(calculator(6, 0, '/')); 
 
  //------------------------------------------------------------------
  function charFCounter(str) {
    let frequency = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (frequency[char] == undefined) {
        frequency[char] = 1;
      } else {
        frequency[char] = frequency[char] + 1;
      }
    }
  
    return frequency;
  }
  
  console.log(charFCounter("salut")); 
  console.log(charFCounter("oussama")); 
   
//---------------------------------------------------------
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min: min, max: max };
  }
  
  console.log(findMinMax([3, 5, 1, 8, -2, 7])); 
  console.log(findMinMax([10, 10, 10])); 
  
  