// ************************Asssigment06********************************
// *********************functions********************
// // Question 01
// function currentdate(){
//     var curDate=new Date();
//     var dateAndTime=curDate;
//     console.log("Current date and time is"+" "+dateAndTime)
// }

// currentdate();


// // Question 02
// function usergreets(firstName,lastName)
// {
//     var fullName= firstName+" "+lastName;
//     alert("Hello"+" "+ fullName+" "+ "Good Morning")
// }
// var firstName=prompt("enter your First name");
// var lastName=prompt("enter your last name");
// usergreets(firstName,lastName);

// Question 03
// function userinput(num1,num2)
// {
//     return num1+num2;
    
// }
// var num1=+prompt("enter num1");

// var num2=+prompt("enter num2")

// console.log(num1+num2)

// // Question 04

// function calculator( num1,opr,num2)
// {
    
//     if(
//         opr ==="+"
//     )
//     {return num1+num2;

//     }else if(
//         opr ==="-")
//         {return num1 - num2;
//         }
//     else if(
//         opr ==="*"
//     )
//     {return num1*num2;
//     }
//     else if(
//         opr ==="/"
        
//     )
//    { return num1/num2
// ;}
// }
// var num1=+prompt("enter num1");
// var operator=prompt("enter operator");
// var num2=+prompt(" enter num2");
// var result=calculator(num1,operator,num2)
// console.log(result)

// Question 05

// function square(number)
// {
//     return number*number
// }
// var result=square(3);
// console.log(result)


// Question 06
// function factorial(number){
//     if(number===5 || number===0){
//         return 5;
//     }else
//     {
//         return number* factorial(number-1)
//     }
// }


// var result=factorial(3)
// console.log(result)

// // Question 07
// function countAndDisplay(start,end){
//     for (var i=0; i<=end; i++)
//     {
//         document.write(i + "<br>")
//     }
// }
// var start=+prompt("enter start number");
// var end=+prompt("enter end number")
// countAndDisplay(start,end);

// // Question 08
// function computeHypotenous(base,perpendicular){
//     function calculateSquare(number)
//     {
//         return number*number
//     }


// var baseSquare=calculateSquare(base);
// var perpendicularSquare=calculateSquare(perpendicular);
// var hypotenousSquare=baseSquare+perpendicularSquare;
// var hypotenous=Math.sqrt(hypotenousSquare);
// return hypotenous;}

// var base=+prompt("enter base");

// var perpendicular=+prompt("enter perpendicular")
// var hypotenous=computeHypotenous(base,perpendicular)
// console.log(hypotenous);

// // Question 09
// function calcualteTheAreaWithVariables(
//     wid,hei
// )
// {
//     return wid*hei
// }
// var width=+prompt("enter width");
// var height=+prompt("enter height");
// var result=width*height;
// console.log(result)
// function calcualteTheAreaWithValues(width,height)
// {
//     return width*height
// }
// console.log(2*5)

// Question 10\
// function isPalindrome(str) {
    
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello")); 
// console.log(isPalindrome("A man, a plan, a canal, Panama")); 

// Question 11
// function capitalizeWords(str) {
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }

// console.log(capitalizeWords('the quick brown fox')); 



// Question 12
// function findLongestWord(str) {
    
//     var words = str.split(' ');
//     var longestWord = '';

    
//     for (var i = 0; i < words.length; i++) {
//         var currentWord = words[i];
//         if (currentWord.length > longestWord.length) {
//             longestWord = currentWord;
//         }
//     }

//     return longestWord;
// }

// var inputString = 'Web Development Tutorial';
// var longest = findLongestWord(inputString);
// console.log("Longest word:", longest); 

// // Question 13
// function countOccurrences(str, letter) {
//     var count = 0;
    
    
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === letter) {
//             count++;
//         }
//     }
    
//     return count;
// }

// var inputString = 'JSResourceS.com';
// var letterToCount = 'o';
// var occurrences = countOccurrences(inputString, letterToCount);
// console.log("Occurrences of '" + letterToCount + "': " + occurrences); 


// Question 14


// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference.toFixed(2)); 
// }


// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     console.log("The area is " + area.toFixed(2)); 
// }


// var radius = 5;
// calcCircumference(radius); 
// calcArea(radius); 


// ********************************************end*******************************************








































































































