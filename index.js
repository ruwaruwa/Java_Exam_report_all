//quesion one//

// var num1 = 50;
// var num2 =7;
// // addi
// console.log(num1+num2)
// // subtr
// console.log(num1-num2)
// // multi
// console.log(num1*num2)
// // division
// console.log(num2/num1)


//question two///promt
// let number = parseInt(prompt("enter a number 1"))

// let number2 = parseInt(prompt("enter a number 2"))
// console.log(number+number2)
// console.log(number-number2)
// console.log(number*number2)
// console.log(number2/number)

// console.log(number%number2)

//question thre
// let num1 = parseInt(prompt("Enter a number 1"))

// let num2 = parseInt(prompt("Enter a number 2"))

// let num3 = parseInt(prompt("Enter a number 3"))


// if(num1 > num2){
//     console.log( num1 +"waxa ugu Weyn")
// }
// else if(num2 > num3){
//     console.log( num2 +"waxa ugu wayn")

// }
// else if (num3 >num1){
//     console.log( num3 +"waxa ugu wayn ")

// }
// else if (num1=num2, num2=num3){
//     console.log( "waa isku darku waa ")
// }

//
//
//question four

// const xogta = (name,age) => {
//     console.log(name,age);

// }
// xogta("ruwa", 40)

// five

// var name = prompt("enter name")
// for(var count = 1; count <= 100; count++){
//     console.log(count+ '' + name);
//     document.write("<br>" +count ,name);

// }

//queastion six
// let Friends = ["ruw", "geed" , "Ahmed", "cali", "abdi"]
// let num=0;
// while(num < Friends.length){

//    console.log(Friends[num])
//    num++;
//    }

//question five
// function add(){
//     var num1 = 4;
//     var num2 = 5;
//     var num3 = 6;

//     var sum = num1 + num2;
//     var tot = num2 + num3;
//     var res = num3 + num1;


//     console.log( "the addition of ",num1 , "and",num2 ,"is " ,sum)
//     console.log( "the addition of ",num2 , "and",num3 ,"is " ,tot)
//     console.log( "the addition of ",num3 , "and",num1 ,"is " ,res)


// }
// add();


///menu
// const btnopen=document.getElementById('iconopen')
// const btnclose= document.getElementById('closeButton')
// const munulink=document.getElementById('menulink')
// btnopen.addEventListener('click',function(){
//     munulink.style.display='block'
//     btnopen.style.display='none'
//     btnclose.style.display='block'
// })
// btnclose.addEventListener('click',function(){
//     munulink.style.display='none'
//     btnopen.style.display='block'
//     btnclose.style.display='none'
// })

// tasbih
// const add=document.getElementById('add')
// const decre=document.getElementById('dec')
// const res=document.getElementById('res')
// h1=document.querySelector('h1')
// var statvalu=0
// add.addEventListener('click',function(){
// statvalu++
// h1.innerHTML = statvalu

// })
// decre.addEventListener('click',function(){
//   if(statvalu>0){
//     statvalu --
//     h1.innerHTML=statvalu
//   }
// })
// res.addEventListener('click',function(){
//     statvalu--
//     h1.innerHTML=0
// })

//ligth app
const ligthbox=document.getElementById('ligth-box')
 const on=document.getElementById('bton')
 const of=document.getElementById('btnof')

on.addEventListener('click',function(){
ligthbox.style.backgroundColor='red'
on.style.color='red'
of.style.color='black'
})
of.addEventListener('click',function(){
    ligthbox.style.backgroundColor='transparent'
    on.style.color='black'
    of.style.color='red'
    })