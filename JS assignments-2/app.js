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

var inputs = prompt("enter name")
for (a=0;a<=inputs.length;++a){
    
    var ascii = inputs.charCodeAt(a)
    if (ascii == 33 || ascii == 44 || ascii==46 || ascii == 64){
        
        alert("enter valid user name")
       

       
    }
    else{

        var ascii = inputs.charCodeAt(a++)
        
    }}