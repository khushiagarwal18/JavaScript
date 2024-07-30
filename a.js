// console.log("Hello World!");
// console.log("Hello Dear!");


// let a = 10;
// let b = 5;
// let sum = a + b;
// console.log("the sum is", sum);


// let p1 = 10;
// let p2 = 7;
// let output = `Total is : ${p1 + p2} rupees.`
// console.log(output);


// let age = 18;
// console.log(age>18);
// console.log(age<18);
// console.log(age<=18);
// console.log(age>=18);


// let signal = "red";
// if(signal==="red"){
//     console.log("Stop");
// }
// else if(signal==="yellow"){
//     console.log("wait");
// }
// else if(signal==="green"){
//     console.log("go");
// }
// else {
//     console.log("traffic light broken");
// }


// let age = 21;
// if (age >= 18)
// {
//     console.log("You can vote");
// }
// else 
// {
//     console.log("You can vote");
// } 


// let day = "friday";
// if (day == "monday") {
//     console.log("wear white");
// }
// else if (day == "tuesday") {
//     console.log("wear red");
// }
// else if (day == "wednesday") {
//     console.log("wear green");
// }
// else if (day == "thursday") {
//     console.log("wear yellow");
// }
// else {
//     console.log("wear anything");
// }


// let marks = 99;
// if(marks>33){
//     console.log("pass")
//     if(marks>80)
//     {
//         console.log("outstanding");
//     }
//     else 
//     {
//         console.log("A");
//     }  
// }
// else {
//     console.log("Fail");
//     console.log("Better Luck next time!");
// }


// let str = "apple";
// if(str[0]=="a" && str.length>3)
// {
//     console.log("good string");
// }
// else 
// {
//     console.log("not a good string");
// }


// let color= "red";
// switch (color) 
// {
//     case "red" :
//         console.log("stop");
//         break;
//         case "yellow" :
//         console.log("wait");
//         break;
//         case "green" :
//         console.log("go");
//         break;
//         default :
//         console.log("broken");
//         break;
// }



// let day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
//         break;
// }


// alert("something is wrong");
// console.error("There's an error!");
// console.warn("This is a warning!");


// let fullName = prompt("Enter your first name : ")
// let lastName = prompt("Enter your last name : ")
// console.log(`Welcome ${fullName}`);
// console.log("Welcome", fullName + " " + lastName);
// console.log(`Welcome ${fullName} ${lastName}`);


// let num = 50;
// if(num%10==0)
// {
//     console.log("Good");
// }
// else 
// {
//     console.log("Bad");
// }


// let fullName = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");
// console.log(fullName, "is", age, "years old.")
// console.log(`${fullName} is ${age} years old!`)


// let quarter = 3;
// switch (quarter) {
//     case 1:
//         console.log("january, february, march");
//         break;
//     case 2:
//         console.log("april, may, june");
//         break;
//     case 3:
//         console.log("july, august, sept");
//         break;
//     case 4:
//         console.log("oct, nov, dec");
//         break;
// }


// let string = prompt("Enter a string : ");

// if((string[0]=="a" || string[0]=="A") && string.length>5)
// {
//     console.log("golden string");
// }
// else 
// {
//     console.log("not a golden string");
// }


// let a = prompt("enter the first number");
// let b = prompt("enter the second number");
// let c = prompt("enter the third number");

// if(a>b && a>c)
// {
//     console.log(a, "is the largest");
// }
// else if(b>c && b>a)
// {
//     console.log(b, "is the largest");
// }
// else
// {
//     console.log(c, "is the largest");
// }


// let num1 = prompt("enter the first number : ");
// let num2 = prompt("enter the first second number : ");

// if((num1%10) == (num2%10))
// {
//     console.log("same digit", num1%10);
// }
// else 
// {
//     console.log("same digit not");
// }


// let password = prompt("Set your password");
// console.log(password.trim());
// note - strings are immutable in javascript

// let str = "Khushi Agarwal";
// let str_u = str.toUpperCase();
// console.log(str_u);
// let str_l = str.toLowerCase();
// console.log(str_l);

// let str = "iamanexpert";
// let str1 = str.indexOf("exp");
// let str1 = str.indexOf("a");    1
// let str1 = str.indexOf("A");   -1
// let str1 = str.indexOf("l");   -1
// console.log(str1);

// let msg = "       hello      ";
// let newMsg = msg.trim();
// console.log(newMsg);
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);
//  OR
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);


// let str = "ILoveShopping";
// console.log(str.slice(5));
// console.log(str.slice(1,5));
// console.log(str.slice(-3));

// console.log(str.replace("Love", "Do"));
// console.log(str.replace("o", "x"));

// console.log(str.repeat(4));



// let msg = "work hard";
// console.log(msg.trim().toUpperCase());

// let name = "ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna", "Our"));

// console.log(name.slice(4).replace("l", "t"));
// OR  
// newName = name.slice(4);
// console.log(newName);
// newName = name.replace("l", "t");
// console.log(newName);


// let students = ["aahana", "khushi", "gudda"];

// let nums = [2,3,4,5];
// num1 = nums.length
// console.log(num1);

// let marks = [99, 98, 100, 98, 97];
// let names = ["Khushi", "Aahana", "Gudda"];
// let info = ["Khushi", 20, 9.7];
// let arr = [];

// let fruits = ["mango", "apple", "litchi"];
// fruits[0] = "banana";
// fruits[1] = "pineapple";
// fruits[10] = "greenapple";
// console.log(fruits);

// cars = ["BMW", "Mercedes", "Ferrari", "Porsche"];
// cars.push("Rolls-Royce");
// cars.push("Lamborghini");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.unshift("Bugatti");
// console.log(cars);
// cars.shift();
// console.log(cars);

// let months = ['january', 'july', 'march', 'august'];
// months[1] = "june";
// months[0] = "july";
// console.log(months);

// months.shift()
// months.shift()
// months.unshift("june");
// months.unshift("july");
// console.log(months);

// let primary = ["red", "yellow", "blue"];
// console.log(primary.indexOf("yellow"));     // 1
// console.log(primary.indexOf("Yellow"));    // -1
// console.log(primary.indexOf("green"));    //  -1
// console.log(primary.includes("red"));       // true
// console.log(primary.includes("green"));    // false

// let primary = ["red", "yellow", "blue"];
// let secondary = ["orange", "pink", "white"];
// finalArray1 = primary.concat(secondary);
// console.log(finalArray1);
// finalArray2 = secondary.concat(primary);
// console.log(finalArray2);
// finalArray = primary.reverse();
// console.log(finalArray);

// let primary = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(primary.slice());
// console.log(primary.slice(3,4));
// console.log(primary.slice(2));
// console.log(primary.slice(-4));


// cars = ["BMW", "Mercedes", "Ferrari", "Porsche"];
// cars.sort();

// let str = prompt("Enter a string : ");
// let idx = prompt("Enter the index you want to check : ");

// if (str[idx] == str[idx].toLowerCase()) {
//     console.log("Character is lowercase.");
// }
// else {
//     console.log("Character is not lowercase.");
// }

// let str = prompt("Enter a string : ");
// if(str.length==0)
// {
//     console.log("string is empty");
// }
// else
// {
//     console.log("not empty");
// }

// let str = prompt("Enter a string : ");
// console.log("string with spaces : ", str);
// console.log("string without spaces :", str.trim());


// let arr = ["hello", "a", "khushi", 20, 18, 10];
// let arr = prompt("Enter an array : ")
// let item = prompt("Enter a character : ");
// if(arr.indexOf(item) != -1 )
// {
//     console.log("element exists in array");
// }
// else 
// {
//     console.log("element does not exist in array");
// }

// for(let i=1;i<=5;i++)
// {
//     console.log(i);
// }

// for(let i=10; i>=1; i--)
// {
//     console.log(i);
// }

// console.log("odd numbers");
// for(let i=1; i<=15; i=i+2)
// {
//     console.log(i);
// }

// console.log("backwards");
// for(let i=15; i>=1; i=i-2)
// {
//     console.log(i);
// }

// console.log("even numbers");
// for(let i=2; i<=10; i=i+2)
// {
//     console.log(i);
// }

// console.log("backwards");
// for(let i=10; i>=2; i=i-2)
// {
//     console.log(i);
// }

// let i = 1;
// let n = prompt("enter a number you want the multiplication table for : ");
// for(i=1; i<=10; i++)
// {
//         console.log(`${n} * ${i} = `, n*i);
// }

// for(let i=1; i<=3; i++)
// {
//     for(let j=1; j<=3; j++)
//     {
//         console.log(j);
//     }
// }

// let i = 1;
// while(i<=5)
// {
//     console.log(i);
//     i++ ;
// }

// let i = 0;
// while(i<=10)
// {
//     console.log(i);
//     i=i+2;
// }

// const favMovie = "jab we met"
// let guess = prompt("Enter your guess : ");
// while (guess != favMovie) {
//     if (guess == "quit") {
//         console.log("You quit!");
//         break;
//     }
//     guess = prompt("Wrong! Enter another guess : ");
// }
// if (guess == favMovie) {
//     console.log("Yay! Correct.");
// }

// let i = 1;
// while(i<=5)
// {
//     if(i==3)
//     {console.log("Break at 3");

//         break;
//     }
//     console.log(i);
//     i++ ;
// }
// console.log("out of the loop");

// let fruits = ["mango", "apple", "guava", "litchi", "banana"];
// for(let i=0; i<fruits.length; i++)
// {
//     console.log(i, fruits[i]);
// }

// for let(i=fruits.length-1; i>=0; i--)
// {
//     console.log(i, fruits[i]);
// }


// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonderman", "flash"]
// ];
// for (let i = 0; i < heroes.length; i++) {
//     console.log(i, heroes[i], heroes[i].length);

//     for(let j=0; j<heroes[i].length; j++)
//     {
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let fruits = ["mango", "apple", "guava", "litchi", "banana"];
// for(fruit of fruits)
// {
//     console.log(fruit);
// }

// let namee = "Khushi Agarwal";
// for(char of namee)
// {
//     console.log(char);
// }


// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonderman", "flash"]
// ];
// for(list of heroes)
// {
//     console.log(list);
// }
//    OR     //
// for(list of heroes)
// {
//     for(name of list)
//     {
//         console.log(name);
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i] == num)
//     {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


// let number = 287152;
// let count = 0;

// let copy = number;

// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy / 10);
// }
// console.log(count);


// let number = 287152;
// let sum = 0;

// let copy = number;

// while(copy > 0)
// {
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

// let number = prompt("Enter a number you want the factorial of : ");
// let factorial = 1;

// for(let i=1; i<=number; i++)
// {
//     factorial *= i;
// }
// console.log(`The factorial of ${number} is ${factorial}.`);


// let arr = [1,2,6,4,8,5,7,9];
// let largest = 0;

// for(let i=0; i<arr.length; i++)
// {
//     if(largest<arr[i])
//     {
//         largest=arr[i];
//     }
// }
// console.log(largest);