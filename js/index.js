
// function fun (...input){
// let sum=0;
// for(let i of input){sum+=i;}
// return sum}
// console.log(fun(1,2));
// console.log(fun(1,2,3));
// console.log(fun(1,2,3,4,5));


// let a=function(){
//     console.log("hello");
// }
// a();

// let a=(x,y) =>{
//     console.log("hello",x+y);
// }
// a(10,20);




// let b=function(){
//   if(a>=18){
//     console.log("able to vote");
//     }
// else{
//     console.log("note able to vote");
// }
// }
 
// let a=parseInt(prompt("a"));
// b(a);
// let a=function(){
//     let b;
//     if(b%2==0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd number");
//     }
// }
// let b=parseInt(prompt("b"));
// a(b);
// let a=function(radius){
//      let pi=22/7;
//      console.log("pi*radius*radius");
//      console.log("2*pi*r");
// }
// let r=parseInt(prompt("enter radius"));
//  a(radius);
// let table=function(num){
//     for(i=1;i<=10;i++){
//         console.log(i*num);
//     }}
//         let num=parseInt(prompt("enter num"));
//         table(num);
    // 
  
  
    // array methods
    // const fruits=["banana","orange","apple"];
    //  console.log(fruits.length);
    // console.log(fruits.toString());
    // console.log(fruits.at(2));
    // console.log(fruits);
    // console.log(fruits.join("*"));
    // console.log(fruits.pop());
    // console.log(fruits.push("kiwi"));
    // console.log(fruits.shift());
    // console.log(fruits.unshift("lemon"));
    // delete fruits[0];
    //  console.log(fruits);
    // const girls=["priyanshi","divyanshi","arshala","kirti","lavina"];
    // const boys=["rohan","siddharthaa","anshu","nahru"];
    // const Class=girls.concat(boys);
    // console.log(Class);
    // console.log(fruits.copyWithin(2,0));
    // console.log(fruits);
    // const arr=[[1,2],[3,4],[5,6]];
    // console.log(arr.flat());
    // console.log(fruits.splice(0,1));
    // console.log(fruits.slice(1,3));

   
// string method
// let text="miracle";
// console.log(text.length);
// console.log(text.at(2));
// console.log(text.charAt(2));
// console.log(text.charCodeAt(0));
// console.log(text[0]);

// let Fruit="banana,apple,mango";
// console.log(Fruit.slice(7,13));
// console.log(Fruit.slice(7));
// console.log(Fruit.substring(7,15));

// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// let text1="hello";
// let text2="world";
// console.log(text1.concat("",text2));

//  let word="      hello world";
//  console.log(word.trimStart());
//  console.log(word.trimEnd());
// let New="5";
//  console.log(New.padStart(4,"0"));
//  console.log(New.padEnd(5,"x"));

//  console.log(text.repeat(2));
//  console.log(Fruit.replace("apple","kiwi"));
//  console.log(Fruit.replaceAll("apple","kiwi"));
//  console.log(text.split(","));

// console.log(new Date());
// let a=new Date("2021-3-25");
//  console.log(a.getFullYear());
// console.log(a.getMonth());
//  console.log(a.getHours());
// console.log(a.getMinutes());
//  console.log(a.getSeconds());
// console.log(a.getMilliseconds());
//  console.log(a.getDay());
// console.log(a.getTime());
//  console.log(Date.now());
// console.log(a.getTimezoneOffset());
// set method
//  console.log(a.setFullYear(2020));
//   console.log(a.setMonth(11));
//   console.log(a.setDate(30));
//   console.log(a.setHours(22));
//  console.log(a.setMinutes(30));
//   console.log(a.setSeconds(10));
// wnidow object
// window.document.getElementById();
// window.document.getElementsByClassName();
// window.innerWidth;
// window.innerHeight;

// // addevEntlisteners(){
//     window.addEventListener("click",function(){
//         console.log("hello i am clicked");
    
    // })
//  alert("hello");

//  function hello(){
//     const Myk=window.open("","","width=200,height=200");      
//     Myk.blur();
//  }
// const time=setTimeout(my,10000);
// function my(){
//     console.log("hello its 5 min late");
// }
// 
// setInterval(function(){
//     console.log("divyanshi");

// },1000);

// function hello(){
//     window.scrollTo(200,0);

// navigation object
// console.log(navigator.appCodeName);
//  console.log(navigator.appName);
//  console.log(navigator.appVersion);
//  console.log(navigator.cookieEnabled);
//  console.log(navigator.language);
//  console.log(navigator.online);
//  console.log(navigator.platform);
//  console.log(navigator.useragent);


// ques2
// var count=0;
// var button=document.getElementById('div');
// var countdisplay=document.getElementById("count");
// button.addEventListener("click",function(){
//     count++;
//     countdisplay.innerHTML=count;
// });

  
// ques3
// function first(){
// document.body.style.backgroundImage="url('DI21_000048047_3000_3000_3to1.webp')"
// }
// function second() {
//     document.body.style.backgroundImage="url('C:\Users\ShivayAgrawal\Desktop\divyanshi\css\Capture.PNG')"

// }
// function third(){

// document.body.style.backgroundimage="url('C:\Users\ShivayAgrawal\Desktop\divyanshi\css\240708 BMW THE 5 LAUNCH_India_444.webp')"
// }
// function fourth(){
// document.body.style.backgroundimage="url('C:\Users\ShivayAgrawal\Desktop\divyanshi\css\hero_apple_intelligence_headline__fwxxapju9a6i_large.png')"
// }
// function fivth(){
// document.body.style.backgroundimage="url('C:\Users\ShivayAgrawal\Desktop\divyanshi\DI21_000048047_3000_3000_3to1.webp')"
// }
// let a= document.getElementById('first');
// let b=document.getElementById('second');
// function first(){
//     a.style.display="none";
//     b.style.display="block";
// }
// function second(){
//     a.style.display="block";
//     b.style.display="none"
// }
// function third(){
    
// }
// function fun(){
//     let a=document.body;
//     a.style.backgroundColor='yellow';}


// function displayDate(){
//     document.getElementById("showDate").innerHTML=Date();

// }
// let y=Math.floor(Math.random()*10+1);
// let guess=1;
// console.log(y);

// document.getElementById("submitguess").onclick=function(){
//     let x=document.getElementById("guessfield").value
//     if(x==y){
//         alert("congratulations")
//     }
//     else{
//         guess++;
//         alert("oops,try again");
//     }
// }
// let secret= Math.floor(Math.random()*10+1);
// let guess=0;
// let max=10;
// function number(){
//     let user=prompt("guess a number");
//     guess++;
//     if(user==secret){
//         alert("congratulations");

//     }
//     else{
//         alert("wrong answer");}
//         document.write("attempts:-${guess}/${max}");
// if(guess>=max && user!=secret){
//     alert("game over");
//     return;
// }
// number();
// }
// number();
    
// function myfunction(){
//     var x=document.getElementById("myinput").value;
//     document.getElementById("demo").innerHTML=x;
// }
// functionmyFunction(){
//     var x=document.createElement("TEXTAREA");
//     var t=document.createTextNode("hello and welcome to miracle iT academy");
//     x.appendChild(t);
//     document.body.appendChild(x);
// }
// returns all <a> alement that have a name attribute anchor
// document.body:-returns the body Element
// document.documentElement:-returns the <html> element 
// document.forms:- return all form element
// document.head:-return all form head
// document.images:-
// document.title:-
// document.url:-returns the complete url of the document


// *addind and deleting elements
// methods
// 1) document.createElement(element):-
// create an html element 
// 2 document.removechild(element):-remove an html element
// 3 document.appendChild(element):- add an html element
// 4 document.replaceChild(new,old):-replace an html element
// 5 document.write

// node Object

// document.createTextNode("entertext");


// insert before
// document.getElementById("element").insertbefore (old,new)
// bom (browser object model)
// 1)window
// screen object
// Navigation
// location 
// history 