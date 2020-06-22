// ============= chapter 21-25===========
// task 1
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var fname = prompt("Enter first name")
// var lname = prompt("enter last name")
// var fullname = fname+ " " + lname
// alert(fullname + " ,welcome sir how are you?")

// task 2
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var model = prompt("favorite mobile phone model")
// alert("length of your model is " + model.length)

// task3
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var sTring = "pakistan"
// document.write("index of n is : " + sTring.indexOf("n"))

// task 4
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser .

// var str = "hello world"
// document.write("last inndex of l is : " + str.lastIndexOf("l"))

// task5
// Write a program to find the character at 3 rd index in the
// word “Pakistani” and display the result in your browser .

// var str = "Pakistani"
// document.write("character at third index is : " + str.charAt(3))

// task6
// Repeat Q1 using string concat() method.

// var fname = prompt("Enter first name")
// var lname = prompt("enter last name")
// var result = fname.concat(lname)
// alert(result + " ,welcome sir how are you?")

// task 7
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var str = "Hyderabad"
// var res = str.replace("Hyder","Islam")
// document.write(res)

// task 8
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var res = message.replace(/and/g,"&")
// document.write(res)

// task 9
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var str = "472"
// document.write(str + " the number is string <br>")
// var num = parseInt(str)
// if (num === 472){
//     document.write(num + " the number is integer")
// }

// task 10
// Write a program that takes user input. Convert and
// show the input in capital letters.

// var inputs = prompt("enter text")
// document.write(inputs.toUpperCase())

// task11
// Write a program that takes user input. Convert and
// show the input in title case.

// var inputs = prompt("enter text")
// var inCap = inputs.slice(0,1)
// var inSmall = inputs.slice(1)
// var res = inCap.toUpperCase() + inSmall.toLowerCase()
// document.write(res)

// task 12
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36
// var res = num.toString()
// var withoutdot = res.split('.').join("")
// document.write(withoutdot);

// task 13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var inputs = prompt("enter name")
// for (a=0;a<inputs.length;a++){
//     var ascii = inputs.charCodeAt(a)
//     if (ascii == 33 || ascii == 44 || ascii==46 || ascii == 64){   
//         alert("enter valid user name")
      
//     }
// }
  
// task 14
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var A = ["cake","apple pie" ,"cookie" ,"chips" ,"patties" ]
// var user = prompt("please enter item you want")
// var search = user.toLowerCase()
// // document.write(search)
// if (search === A[0] || search === A[1]  || search === A[2]  || search === A[3]  || search === A[4]){
//  document.write(user + " is available at index " + A.indexOf(search))
// }
// else {
//     document.write(user + " not available")
// }

// task 15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("enter password")

// if(password === "" || password.length<6 || password[0] >= 0  ){
//    alert("please enter a valid password")
// }
// var ascii = password.charCodeAt(a)
// for (a=0;a<password.length;a++){     
//         if (ascii == 33 || ascii == 44 || ascii==46 || ascii == 64 ){   
//             alert("please enter a valid password")        
//         }
//         else if (ascii < 65 || ascii > 122){
//             alert("please enter a valid password")
//         }
//         else if (ascii > 90 && ascii < 97){
//             alert("please enter a valid password")
//         }
//     }

// task 16
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var line = []
// line = university.split('')
// for (var i = 0; i < line.length; i++) {
// document.write(line[i] + "<br>")
// }

// task 17
// Write a program to display the last character of a user
// input.
// var user = prompt("user input")
// var a = user.length-1
// document.write(user.charAt(a))

// task 18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var sTring = "The quick brown fox jumps over the lazy dog"
// var lower = sTring.toLowerCase()

// var count = ((lower.match(/the/g) || []).length);
// document.write(lower+"<br>")
// document.write("the ocurances of the word 'the' are/is :  " + count)

// =================== chapter 26-30 ==============================
// 
// task 1
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var input = +prompt("enter +ve integer")
// document.write(input)
// document.write("<br>")
// document.write(Math.round(input))
// document.write("<br>")
// document.write(Math.floor(input))
// document.write("<br>")
// document.write(Math.ceil(input))
// document.write("<br>")

//  task 2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var input = +prompt("enter -ve integer")
// document.write(input)
// document.write("<br>")
// document.write(Math.round(input))
// document.write("<br>")
// document.write(Math.floor(input))
// document.write("<br>")
// document.write(Math.ceil(input))
// document.write("<br>")

// task 3
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var input = +prompt("enter absolute to be value in integer")
// document.write(input)
// document.write("<br>")
// document.write(Math.abs(input))

// task 4

// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var num = Math.random() * 7
// var dice = Math.floor(num)
// document.write("Dice value is " + dice)

//  task 5
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var num = Math.random() * 2
// var toss = Math.floor(num)
// if (toss === 0){
//     document.write("heads")
// }
// else{
//     document.write("tails")
// }

// task 6
// Write a program that shows a random number between 1
// and 100 in your browser.

// var num = (Math.random() * 99 )+ 1
// var between = Math.floor(num)
//   document.write(between)
// 

// task 8
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var num = (Math.random() * 7)+ 2
// var check = Math.floor(num)
// var usec = +prompt("enter no b/w 1 to 10")
// if (usec == check){
//     document.write("Correct guess")
// }
// else{
//     document.write("try Again")
// }

// ====================== chapter 31-34================================

//  task 1
// Write a program that displays current date and time in
// your browser.

// var a = new Date()
// document.write(a)

// task 2
// Write a program that alerts the current month in words.
// For example December.

// var a = new Date()
// var b = a.getMonth()
// if (b == 0){
//     document.write("january")
// }
// else if (b == 1){
//     document.write("February")
// }
// else if (b == 2){
//     document.write("March")
// }
// else if (b == 3){
//     document.write("April")
// }
// else if (b == 4){
//     document.write("May")
// }
// else if (b == 5){
//     document.write("June")
// }
// else if (b == 6){
//     document.write("July")
// }
// else if (b == 7){
//     document.write("August")
// }
// else if (b == 8){
//     document.write("SEPTEMBER")
// }
// else if (b == 9){
//     document.write("OCTOBER")
// }
// else if (b == 10){
//     document.write("NOVEMBER")
// }
// else if (b == 11){
//     document.write("DECEMBER")
// }

// task 3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var a = new Date()
// var b = a.getDay()

// if (b == 0){
//     document.write("Sun")
//     }
//     else if (b == 1){
//         document.write("mon")
//     }
//     else if (b == 2){
//         document.write("tues")
//     }
//     else if (b == 3){
//         document.write("wed")
//     }
//     else if (b == 4){
//         document.write("thurs")
//     }
//     else if (b == 5){
//         document.write("fri")
//     }
//     else if (b == 6){
//         document.write("Sat")
//     }

// task 4
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var a = new Date()
// var b = a.getDay()
// if(b==0 || b == 6){
//     document.write("It’s Fun day")
// }
// else{
//     document.write("no fun day")
// }


// task 5
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.

// var a = new Date()
// var b = a.getDate()
// document.write(b + "<br>")
// if(b <16){
//     document.write("First fifteendays of the month")
// }
// else{
//     document.write("Last days of the month")
// }

// task 6
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.